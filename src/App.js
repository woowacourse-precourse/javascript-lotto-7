import { Input } from './Views/inputViews.js';
import { countPurchaseAmount } from './Models/purchasePriceUtils.js';
import { Output } from './Views/outputViews.js';
import { issueLottoList } from './Models/lottoListIssueUtils.js';
import { produceStatistics } from './Models/winningStatisticsUtils.js';
import { produceRateOfReturn } from './Models/rateOfReturnUtils.js';
import { trimWinningNumbers } from './Models/winningNumbersUtils.js';

class App {
  constructor() {
    this.purchaseAmount = null;
    this.purchaseCount = null;
    this.lottoList = null;
  }

  async run() {
    await this.startPurchase();
    this.produceLottoList();
    await this.getWinningInfo();
    this.calculateAndPrintReturnOfRange();
  }

  async startPurchase() {
    this.purchaseAmount = await new Input().getPurchaseAmountInput();
    this.purchaseCount = countPurchaseAmount(this.purchaseAmount);
    new Output().printPurchaseAmountCount(this.purchaseCount);
  }

  produceLottoList() {
    this.lottoList = issueLottoList(this.purchaseCount);
    new Output().printLottoList(this.purchaseCount, this.lottoList);
  }

  async getWinningInfo() {
    const winningNumbers = await new Input().getWinningNumbersInput();
    const trimWinningNum = trimWinningNumbers(winningNumbers);
    const bonusNumber = await new Input().getBonusNumberInput();
    produceStatistics(trimWinningNum, bonusNumber, this.lottoList);
    new Output().printWinningAmount();
  }

  calculateAndPrintReturnOfRange() {
    const rateOfReturn = produceRateOfReturn(this.purchaseAmount);
    new Output().printRateOfReturn(rateOfReturn);
  }
}

export default App;
