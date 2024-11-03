//@ts-check

import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { LOTTO_CONFIG } from '../constants/lotto.js';
import User from '../User/User.js';
import LottoService from '../Service/LottoService.js';
import LottoResultView from '../views/LottoResultView.js';
import { validateLottoPurchase } from '../validate/purchaseValidator.js';
import { outputView } from '../views/outputView.js';
import { validateWinningNumber } from '../validate/winningNumberValidator.js';
import { validateBonusNumber } from '../validate/bonusNumberValidator.js';
import Lotto from '../Lotto.js';

class Game {
  constructor() {
    this.user = new User();
    this.lottoService = new LottoService();
    this.resultView = new LottoResultView();
    this.winningNumbers = null;
  }

  async process() {
    const { lottos, purchaseAmount } = await this.handleUserPurchase();
    this.winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();

    const results = this.lottoService.calculateResults(
      lottos,
      this.winningNumbers,
      bonusNumber
    );
    this.resultView.printResults(results);

    const earningRate = this.lottoService.calculateEarningRate(
      purchaseAmount,
      results
    );
    this.resultView.printEarningRate(earningRate);
  }

  async processPurchase() {
    const purchaseAmount = await this.getPurchaseAmount();
    const count = this.calculateLottoCount(purchaseAmount);
    const lottos = this.generateLottos(count);
    this.displayPurchaseResult(count, lottos);

    return { lottos, purchaseAmount };
  }

  async getPurchaseAmount() {
    const purchaseAmount = await this.user.readUserInput(GAME_MESSAGE.PURCHASE);
    validateLottoPurchase(purchaseAmount);
    return purchaseAmount;
  }

  /**@param {string} purchaseAmount  */
  calculateLottoCount(purchaseAmount) {
    return Number(purchaseAmount) / LOTTO_CONFIG.PRICE_PER;
  }

  /**@param {number} count  */
  generateLottos(count) {
    return this.lottoService.createLottos(count);
  }

  /**
   * @param {number} count
   * @param {Lotto[]} lottos
   * */
  displayPurchaseResult(count, lottos) {
    this.resultView.printPurchaseResult(count, lottos);
  }

  /**@param {Error} error */
  handleErrorMessage(error) {
    outputView.printMessage(error.message);
  }

  async handleUserPurchase() {
    while (true) {
      try {
        const { lottos, purchaseAmount } = await this.processPurchase();
        return { lottos, purchaseAmount };
      } catch (error) {
        this.handleErrorMessage(error);
      }
    }
  }

  async getWinningNumbers() {
    while (true) {
      try {
        return await this.processWinningNumbers();
      } catch (error) {
        this.handleErrorMessage(error);
      }
    }
  }

  async processWinningNumbers() {
    const winningNumber = await this.user.readUserInput(
      GAME_MESSAGE.WINNING_NUMBER
    );
    validateWinningNumber(winningNumber.split(',').map(Number));
    return winningNumber.split(',').map((num) => Number(num.trim()));
  }

  async getBonusNumber() {
    while (true) {
      try {
        const input = await this.user.readUserInput(GAME_MESSAGE.BONUS_NUMBER);
        validateBonusNumber(input, this.winningNumbers);
        return input;
      } catch (error) {
        outputView.printMessage(error.message);
      }
    }
  }
}

export default Game;
