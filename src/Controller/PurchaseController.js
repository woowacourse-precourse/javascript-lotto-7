//@ts-check

import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { LOTTO_CONFIG } from '../constants/lotto.js';
import Lotto from '../Lotto.js';
import LottoService from '../Service/LottoService.js';
import User from '../User/User.js';
import { validateLottoPurchase } from '../validate/purchaseValidator.js';
import LottoResultView from '../views/LottoResultView.js';
import { outputView } from '../views/outputView.js';

class PurchaseController {
  /**
   * @param {User} user
   * @param {LottoService} lottoService
   * @param {LottoResultView} resultView
   */
  constructor(user, lottoService, resultView) {
    this.user = user;
    this.lottoService = lottoService;
    this.resultView = resultView;
  }

  async handlePurchase() {
    while (true) {
      try {
        return await this.processPurchase();
      } catch (error) {
        outputView.printErrorMessage(error);
      }
    }
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
}

export default PurchaseController;
