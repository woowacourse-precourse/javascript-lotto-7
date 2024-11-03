import { AMOUNT } from '../constants/constants.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';
import throwError from '../utils/error.js';

class PurchaseAmountValidator {
  static validate(amount) {
    this.#validateIsNumber(amount);
    this.#validateAmountRange(amount);
  }

  static #validateIsNumber(amount) {
    if (Number.isNaN(Number(amount))) {
      throwError(ERROR_MESSAGES.purchase_amount_not_number);
    }
  }

  static #validateAmountRange(amount) {
    if (amount < AMOUNT.min) {
      throwError(ERROR_MESSAGES.purchase_amount_min(AMOUNT.min));
    }

    if (amount > AMOUNT.max) {
      throwError(ERROR_MESSAGES.purchase_amount_max(AMOUNT.max));
    }

    if (amount % AMOUNT.unit !== 0) {
      throwError(ERROR_MESSAGES.purchase_amount_unit(AMOUNT.unit));
    }
  }
}

export default PurchaseAmountValidator;
