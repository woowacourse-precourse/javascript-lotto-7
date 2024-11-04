import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage.js';
import { isPerThousandWon } from '../util/validate.js';

class PurchaseAmount {
  #amount;
  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (isPerThousandWon(amount)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.PER_THOUSAND_WON}`);
    }
  }
}

export default PurchaseAmount;
