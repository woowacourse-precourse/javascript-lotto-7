import {
  getPurchasePriceInput,
  getWinningNumbersInput,
  getBonusNumberInput,
} from './Views/inputViews.js';
import { validatePurchasePrice } from './Models/purchasePriceValidator.js';
import { validateWinningNumbers } from './Models/winningNumbersValidator.js';
import { validateBonusNumber } from './Models/bonusNumberValidator.js';
import { printCountPurchaseAmount, printLottoList, printRateOfReturn } from './Views/outputView.js';
import { countPurchaseAmount } from './Models/purchasePriceUtils.js';
import { issueLottoList } from './Models/issueLottoList.js';
import { produceStatistics } from './Models/winningStatistics.js';
import { produceRateOfReturn } from './Models/rateOfReturn.js';

class App {
  async run() {
    const purchasePrice = await getPurchasePriceInput();
    validatePurchasePrice(purchasePrice);

    const purchaseCount = countPurchaseAmount(purchasePrice);

    printCountPurchaseAmount(purchaseCount);
    const lottoList = issueLottoList(purchaseCount);
    printLottoList(purchaseCount, lottoList);

    const winningNumbers = await getWinningNumbersInput();
    validateWinningNumbers(winningNumbers);

    // 여기 컴마 뺀 winningNumbers
    const trimWinningNumbers = (winningNumbers) => {
      const arr = [...winningNumbers];
      const filtered = arr.filter((element) => element !== ',');
      const numberedFiltered = filtered.map(Number);

      return numberedFiltered;
    };

    const trimmedWinningNum = trimWinningNumbers(winningNumbers);

    const bonusNumber = await getBonusNumberInput();
    validateBonusNumber(bonusNumber);

    const winningStatistics = produceStatistics(trimmedWinningNum, bonusNumber, lottoList);

    const rateOfReturn = produceRateOfReturn(purchasePrice);
    printRateOfReturn(rateOfReturn);
  }
}

export default App;
