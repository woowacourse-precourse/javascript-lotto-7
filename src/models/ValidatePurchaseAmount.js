import { PURCHASE_AMOUNT_MESSAGES } from '../constants/errorMessages.js';
import { LOTTO } from '../constants/lottoConstants.js';

class ValidatePurchaseAmount {
  #validateIsNumber(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error(PURCHASE_AMOUNT_MESSAGES.NOT_A_NUMBER);
    }

    return Number(input);
  }

  #validateThousandUnit(input) {
    if (input % LOTTO.PRICE !== 0) {
      throw new Error(PURCHASE_AMOUNT_MESSAGES.NOT_THOUSAND_UNIT);
    }
  }

  #validateOverflow(input) {
    if (input > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        PURCHASE_AMOUNT_MESSAGES.OVERFLOW(Number.MAX_SAFE_INTEGER),
      );
    }
  }

  validatePurchaseAmount(input) {
    this.#validateIsNumber(input);
    this.#validateOverflow(input);
    this.#validateThousandUnit(input);
  }
}

export default ValidatePurchaseAmount;
