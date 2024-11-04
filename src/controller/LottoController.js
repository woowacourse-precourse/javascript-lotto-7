import LottoView from "../view/LottoView.js";
import {
  validatePurchasingAmount,
  validateWinningNumberRange,
  validateWinningNumberDup,
  validateBonusNumberRange,
  validateBonusNumberDup,
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
    await this.setLottoAmounts();
    await this.getWinningNumbers();
    await this.getBonusNumbers();
    this.calculateStatistics();
    this.printStatistics();
  }

  async setLottoAmounts() {
    try {
      const purchaseAmount = await this.getLottoAmounts();
      const lottoCount = this.calculateLotto(purchaseAmount);
      this.generator.generateLottos(lottoCount);
      const lottos = this.generator.getLottos();
      this.view.printGetLottos(lottoCount);
      this.view.printLottos(lottos);
    } catch (error) {
      throw error;
    }
  }

  //로또 숫자 입력
  async getLottoAmounts() {
    const userInputAmounts = await this.view.inputLottoAmount();
    this.checkLottoAmounts(userInputAmounts);
    return Number(userInputAmounts);
  }
  //입력숫자 검증
  checkLottoAmounts(userInputAmounts) {
    validatePurchasingAmount(userInputAmounts);
  }

  //로또 개수 계산
  calculateLotto(count) {
    return Math.floor(count / 1000);
  }

  //당첨번호 입력
  async getWinningNumbers() {
    try {
      const getWinningNumber = await this.view.inputWinningNumber();
      this.checkWinningNumbers(getWinningNumber);
      this.checkWinningNumbersDup(getWinningNumber);
      this.winningNumbers = getWinningNumber;
    } catch (error) {
      throw error;
    }
  }

  //당첨숫자 범위 검증
  checkWinningNumbers(winningNumbers) {
    validateWinningNumberRange(winningNumbers);
  }
  //당첨숫자 중복 검증
  checkWinningNumbersDup(winningNumbers) {
    validateWinningNumberDup(winningNumbers);
  }

  //보너스번호 입력
  async getBonusNumbers() {
    try {
      const getBonusNumber = await this.view.inputBonusNumber();
      this.checkBounsNumber(getBonusNumber);
      this.checkBonusNumberDup(getBonusNumber);
      this.bonusNumbers = getBonusNumber;
    } catch (error) {
      throw error;
    }
  }

  checkBounsNumber(bonusNumbers) {
    validateBonusNumberRange(bonusNumbers);
  }

  checkBonusNumberDup(bonusNumbers) {
    validateBonusNumberDup(bonusNumbers, this.winningNumbers);
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
