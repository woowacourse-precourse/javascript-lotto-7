import { Input } from './View/inputViews.js';
import { Output } from './View/outputViews.js';

import { countPurchaseAmount } from './Model/purchasePriceUtils.js';
import { issueLottoList } from './Model/lottoListIssueUtils.js';
import { WinningStatistics } from './Model/winningStatisticsUtils.js';
import { produceRateOfReturn } from './Model/rateOfReturnUtils.js';
import { trimWinningNumbers } from './Model/winningNumbersUtils.js';

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
    new Output().printPurchaseCount(this.purchaseCount);
  }

  produceLottoList() {
    this.lottoList = issueLottoList(this.purchaseCount);
    new Output().printLottoList(this.purchaseCount, this.lottoList);
  }

  async getWinningInfo() {
    const winningNumbers = await new Input().getWinningNumbersInput();
    const trimWinningNum = trimWinningNumbers(winningNumbers);
    const bonusNumber = await new Input().getBonusNumberInput();
    new WinningStatistics().produceStatistics(trimWinningNum, bonusNumber, this.lottoList);
    new Output().printWinningAmount();
  }

  calculateAndPrintReturnOfRange() {
    const rateOfReturn = produceRateOfReturn(this.purchaseAmount);
    new Output().printRateOfReturn(rateOfReturn);
  }
}

export default App;
