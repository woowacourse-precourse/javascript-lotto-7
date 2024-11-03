import { Input } from './View/inputViews.js';
import { Output } from './View/outputViews.js';

import { countPurchaseAmount } from './Model/purchaseCountCalculator.js';
import { generatedLottoList } from './Model/lottoListGenerator.js';
import { WinningStatistics } from './Model/winningStatisticsCalculator.js';
import { calculateRateOfReturn } from './Model/rateOfReturnCalculator.js';

class App {
  constructor() {
    this.input = new Input();
    this.output = new Output();

    this.purchaseAmount = null;
    this.purchaseCount = null;
    this.lottoList = null;
    this.winningNumbers = null;
    this.paredWinningNumbers = null;
    this.bonusNumber = null;
    this.rateOfReturn = null;
  }

  async run() {
    await this.getPurchaseAmount();
    this.printPurchaseCount();
    this.printLottoList();

    await this.getWinningNumbers();
    await this.getBonusNumber();

    this.printWinningAmount();
    this.printRateOfReturn();
  }

  async getPurchaseAmount() {
    this.purchaseAmount = await this.input.getPurchaseAmountInput();
  }

  printPurchaseCount() {
    this.purchaseCount = countPurchaseAmount(this.purchaseAmount);
    this.output.printPurchaseCount(this.purchaseCount);
  }

  printLottoList() {
    this.lottoList = generatedLottoList(this.purchaseCount);
    this.output.printLottoList(this.lottoList);
  }

  async getWinningNumbers() {
    this.winningNumbers = await this.input.getWinningNumbersInput();
  }

  async getBonusNumber() {
    this.bonusNumber = await this.input.getBonusNumberInput();
  }

  printWinningAmount() {
    new WinningStatistics().calculateWinningStatistics(
      this.winningNumbers,
      this.bonusNumber,
      this.lottoList,
    );
    this.output.printWinningAmount();
  }

  printRateOfReturn() {
    this.rateOfReturn = calculateRateOfReturn(this.purchaseAmount);
    this.output.printRateOfReturn(this.rateOfReturn);
  }
}

export default App;
