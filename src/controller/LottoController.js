import LottoView from "../view/LottoView.js";
import {
  validatePurchasingAmount,
  validateWinningNumberRange,
  validateWinningNumberDup,
} from "../validation.js";
import LottoGenerator from "../model/LottoGenerator.js";
class LottoController {
  constructor() {
    this.view = new LottoView();
    this.generator = new LottoGenerator();
  }

  async init() {
    await this.setLottoAmounts();
    await this.getWinningNumbers();
  }

  async setLottoAmounts() {
    try {
      const purchaseAmount = await this.getLottoAmounts();
      const lottoCount = this.calculateLotto(purchaseAmount);
      this.generator.generateLottos(lottoCount);
      const lottos = this.generator.getLottos();
      this.view.printGetLottos(lottoCount);
      this.view.printLottos(lottos);
      await this.getWinningNumbers();
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
      return Number(getWinningNumber);
    } catch (error) {
      throw error;
    }
  }

  //당첨숫자 범위 검증
  checkWinningNumbers(getWinningNumber) {
    validateWinningNumberRange(getWinningNumber);
  }
  //당첨숫자 중복 검증
  checkWinningNumbersDup(getWinningNumber) {
    validateWinningNumberDup(getWinningNumber);
  }
}

export default LottoController;
