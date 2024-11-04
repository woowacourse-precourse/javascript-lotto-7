import LottoView from "../view/LottoView.js";
import Lotto from "../model/Lotto.js";
import {
  validatePurchasingAmount,
  validateBonusNumber,
} from "../validation.js";
import LottoGenerator from "../model/LottoGenerator.js";
import Statistics from "../model/statistics.js";

class LottoController {
  constructor() {
    this.view = new LottoView();
    this.generator = new LottoGenerator();
    this.winningNumbers = [];
    this.bonusNumbers = null;
    this.statistics = new Statistics();
    this.totalSpent = 0;
  }

  async init() {
    try {
      await this.setLottoAmounts();
      await this.getWinningNumbers();
      await this.getBonusNumbers();
      this.calculateStatistics();
      this.printStatistics();
    } catch (error) {
      this.handleInitError(error);
    }
  }

  handleInitError(error) {
    this.view.printError(error.message);
  }

  async setLottoAmounts() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.totalSpent = purchaseAmount;
    const lottoCount = this.calculateLottoCount(purchaseAmount);
    this.totalSpent = lottoCount * 1000;
    this.generateAndPrintLottos(lottoCount);
  }

  async getPurchaseAmount() {
    try {
      const userInputAmounts = await this.view.inputLottoAmount();
      this.validatePurchaseAmount(userInputAmounts);
      return Number(userInputAmounts);
    } catch (error) {
      this.view.printError(error.message);
      return await this.getPurchaseAmount();
    }
  }

  validatePurchaseAmount(amount) {
    validatePurchasingAmount(amount);
  }

  calculateLottoCount(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  generateAndPrintLottos(lottoCount) {
    this.generator.generateLottos(lottoCount);
    const lottos = this.generator.getLottos();
    this.view.printGetLottos(lottoCount);
    this.view.printLottos(lottos);
  }

  async getWinningNumbers() {
    try {
      const winningNumbersInput = await this.view.inputWinningNumber();
      const winningLottos = new Lotto(winningNumbersInput);
      this.winningNumbers = winningLottos.getLottoNumbers();
    } catch (error) {
      this.view.printError(error.message);
      return await this.getWinningNumbers();
    }
  }

  async getBonusNumbers() {
    try {
      const bonusNumberInput = await this.view.inputBonusNumber();
      const bonusNumber = Number(bonusNumberInput);
      validateBonusNumber(bonusNumber, this.winningNumbers);
      this.bonusNumbers = bonusNumber;
    } catch (error) {
      this.view.printError(error.message);
      return await this.getBonusNumbers();
    }
  }

  calculateStatistics() {
    const lottos = this.generator.getLottos();
    lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto, this.winningNumbers);
      const bonusMatch = lotto.includes(this.bonusNumbers);
      this.statistics.update(matchCount, bonusMatch);
    });
    this.statistics.calculateRate(this.totalSpent);
  }

  getMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  printStatistics() {
    this.view.printStatistics(this.statistics);
  }
}

export default LottoController;
