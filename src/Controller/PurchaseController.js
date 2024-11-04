//@ts-check

import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { LOTTO_CONFIG } from '../constants/lotto.js';
import Lotto from '../Lotto.js';
import LottoService from '../Service/LottoService.js';
import User from '../User/User.js';
import { tryCatch } from '../util/tryCatch.js';
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
      const [error, lottoData] = await tryCatch(this.processPurchase());

      if (error) {
        outputView.printErrorMessage(error);
        continue;
      }

      return lottoData;
    }
  }

  async processPurchase() {
    const purchaseAmount = await this.getPurchaseAmount();
    const count = this.lottoService.calculateLottoCount(purchaseAmount);
    const lottos = this.lottoService.createLottos(count);
    this.resultView.printPurchaseResult(count, lottos);

    return { lottos, purchaseAmount };
  }

  async getPurchaseAmount() {
    const purchaseAmount = await this.user.readUserInput(GAME_MESSAGE.PURCHASE);
    validateLottoPurchase(purchaseAmount);
    return purchaseAmount;
  }
}

export default PurchaseController;
