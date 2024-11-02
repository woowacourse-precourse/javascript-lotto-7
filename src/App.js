import { Input } from './Views/inputViews.js';
import { countPurchaseAmount } from './Models/purchasePriceUtils.js';
import {
  printPurchaseAmountCount,
  printLottoList,
  printRateOfReturn,
  printWinningAmount,
} from './Views/outputViews.js';
import { issueLottoList } from './Models/lottoListIssueUtils.js';
import { produceStatistics } from './Models/winningStatisticsUtils.js';
import { produceRateOfReturn } from './Models/rateOfReturnUtils.js';
import { trimWinningNumbers } from './Models/winningNumbersUtils.js';

class App {
  async run() {
    const purchaseAmount = await new Input().getPurchaseAmountInput();
    const purchaseCount = countPurchaseAmount(purchaseAmount);
    printPurchaseAmountCount(purchaseCount);

    const lottoList = issueLottoList(purchaseCount);
    printLottoList(purchaseCount, lottoList);

    const winningNumbers = await new Input().getWinningNumbersInput();
    const trimWinningNum = trimWinningNumbers(winningNumbers);
    const bonusNumber = await new Input().getBonusNumberInput();
    produceStatistics(trimWinningNum, bonusNumber, lottoList);
    printWinningAmount();

    const rateOfReturn = produceRateOfReturn(purchaseAmount);
    printRateOfReturn(rateOfReturn);
  }
}

export default App;
