import { GAME_RULES } from '../constants/gameRule.js';
import validatePurchaseAmount from '../validators/PurchaseAmountValidator.js';

class LottoMachine {
  #purchaseAmount;

  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

}

export default LottoMachine;