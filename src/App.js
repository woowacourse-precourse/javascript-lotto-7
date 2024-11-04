// App.js
import ServiceFactory from './factories/ServiceFactory.js';
import magicNumber from './constants/magicNumbers.js';

class App {
  constructor() {
    this.purchaseService = ServiceFactory.createPurchaseService();
    this.randomNumberService = ServiceFactory.createRandomNumberService();
    this.lottoService = ServiceFactory.createLottoService();
    this.printService = ServiceFactory.createPrintService();
    this.returnCalculator = ServiceFactory.createReturnCalculator();
  }

  async run() {
    try {
      const { purchaseAmount, purchaseCnt } = await this.handlePurchaseAmount();
      const randomNumObj = this.generateRandomNumbers(purchaseCnt);
      const { lotto, bonusNumber } = await this.createLottoAndBonus();
      this.printWinningStatistics();
      const moneyArr = this.calculateWinningMoney(randomNumObj, bonusNumber);
      this.printWinningMoney(lotto, moneyArr);
      const resultNum = this.calculateReturn(purchaseAmount, moneyArr);
      this.printReturn(resultNum);
    } catch (error) {
      this.printService.printError(error.message);
    }
  }

  async handlePurchaseAmount() {
    return await this.purchaseService.makePurchaseAmount();
  }

  generateRandomNumbers(purchaseCnt) {
    return this.randomNumberService.generateRandomNumbers(purchaseCnt);
  }

  async createLottoAndBonus() {
    const { lotto, lottoNumber } = await this.lottoService.createLotto();
    const bonusNumber = await this.lottoService.createBonus(lottoNumber);
    return { lotto, bonusNumber };
  }

  printWinningStatistics() {
    this.printService.printWinningStatistics();
  }

  calculateWinningMoney(randomNumObj, bonusNumber) {
    const [winningCnt, bonusCnt] = this.lottoService.checkWinning(
      randomNumObj,
      bonusNumber,
    );
    return this.lottoService.createMoneyArr(winningCnt, bonusCnt);
  }

  printWinningMoney(lotto, moneyArr) {
    this.printService.printWinningMoney(lotto, moneyArr);
  }

  calculateReturn(purchaseAmount, moneyArr) {
    const sumMoney = this.returnCalculator.calculateSumMoney(
      moneyArr,
      magicNumber.WINNING_AMOUNT,
    );
    return this.returnCalculator.calculate(sumMoney, purchaseAmount);
  }

  printReturn(resultNum) {
    this.printService.printReturn(resultNum);
  }
}

export default App;
