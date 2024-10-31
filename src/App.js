import {
  getPurchasePriceInput,
  getWinningNumbersInput,
  getBonusNumberInput,
} from './Views/inputViews.js';
import { validatePurchasePrice } from './Models/purchasePriceValidator.js';
import { countPurchaseAmount } from './Models/purchasePriceUtils.js';
import {
  printCountPurchaseAmount,
  printLottoList,
  printRateOfReturn,
} from './Views/outputViews.js';
import { issueLottoList } from './Models/issueLottoList.js';
import { validateWinningNumbers } from './Models/winningNumbersValidator.js';
import { validateBonusNumber } from './Models/bonusNumberValidator.js';
import { produceStatistics } from './Models/winningStatistics.js';
import { produceRateOfReturn } from './Models/rateOfReturn.js';
import { trimWinningNumbers } from './Models/winningNumberUtils.js';

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

    const trimWinningNum = trimWinningNumbers(winningNumbers);

    const bonusNumber = await getBonusNumberInput();
    validateBonusNumber(bonusNumber);

    produceStatistics(trimWinningNum, bonusNumber, lottoList);

    const rateOfReturn = produceRateOfReturn(purchasePrice);
    printRateOfReturn(rateOfReturn);
  }
}

export default App;
