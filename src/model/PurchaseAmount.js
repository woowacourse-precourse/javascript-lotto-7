import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage.js';
import { isNull, isPerThousandWon } from '../util/validate.js';
const regex = /^[1-9]\d*$/;
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
    if (!regex.test(amount)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.PER_THOUSAND_WON}`);
    }
  }

  getAmount() {
    return this.#amount;
  }

  getLottoCount() {
    return this.#amount / 1000;
  }
}

export default PurchaseAmount;
