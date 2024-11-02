import { GAME_RULES } from '../constants/gameRule.js';
import validatePurchaseAmount from '../validators/PurchaseAmountValidator.js';

class LottoMachine {
  #purchaseAmount;
  #lottoCount;

  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
    this.#lottoCount = this.#calculateLottoCount();
  }

  #calculateLottoCount() {
    return this.#purchaseAmount / GAME_RULES.CURRENCY_UNIT;
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

export default LottoMachine;