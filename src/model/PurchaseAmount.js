import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage.js';
import { isPerThousandWon } from '../util/validate.js';

class PurchaseAmount {
  #amount;
  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#amount = purchaseAmount;
  }

  #validate(amount) {
    if (isPerThousandWon(amount)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.PER_THOUSAND_WON}`);
    }
  }
}

export default PurchaseAmount;
