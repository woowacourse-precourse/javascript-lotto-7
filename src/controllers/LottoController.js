import InputView from '../views/InputView.js';
import {
  calculateEarningsRatio,
  calculateLottoAmount,
  convertStringsToNumbers,
} from '../utils/lottoFormatUtils.js';
import LottoService from '../services/LottoService.js';
import OutputView from '../views/OutputView.js';
import InputValidator from '../validator/InputValidator.js';

class LottoController {
  #inputView;
  #outputView;
  #service;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#service = new LottoService();
  }

  async startLotto() {
    const purchaseCost = await this.#getValidatedPurchaseCost();
    const lottoAmount = calculateLottoAmount(purchaseCost);
    const generatedLottos = this.#generateLottos(lottoAmount);
    const winningNumbers = await this.#getValidatedWinningNumbers();
    const bonusNumber = await this.#getValidatedBonusNumber(winningNumbers);
    this.#drawLottoAndPrintResults(
      generatedLottos,
      winningNumbers,
      bonusNumber,
      purchaseCost,
    );
  }

  async #getValidatedPurchaseCost() {
    const purchaseCost = await this.#inputView.getPurchaseCost();
    InputValidator.validatePurchaseCost(purchaseCost);
    return Number(purchaseCost);
  }

  #generateLottos(lottoAmount) {
    const generatedLottos = this.#service.getGeneratedLottos(lottoAmount);
    this.#outputView.printPurchasedLotto(generatedLottos);
    return generatedLottos;
  }

  async #getValidatedWinningNumbers() {
    const winningNumbers = await this.#inputView.getWinningNumbers();
    InputValidator.validateNumbers(winningNumbers);
    return convertStringsToNumbers(winningNumbers);
  }

  async #getValidatedBonusNumber(winningNumbers) {
    const bonusNumber = await this.#inputView.getBonusNumber();
    InputValidator.validateBonusNumber(bonusNumber, winningNumbers);
    return Number(bonusNumber);
  }

  #drawLottoAndPrintResults(
    generatedLottos,
    winningNumbers,
    bonusNumber,
    purchaseCost,
  ) {
    const { matchCounts, totalEarnings } = this.#service.calculateLottoResults(
      generatedLottos,
      winningNumbers,
      bonusNumber,
    );
    const earningsRatio = calculateEarningsRatio(totalEarnings, purchaseCost);
    this.#outputView.printWinningStatistics(matchCounts, earningsRatio);
  }
}

export default LottoController;
