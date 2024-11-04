import {
  ERROR_MESSAGES,
  LOTTO_POSSIBLE_MAX_PRICE,
  LOTTO_UNIT_PRICE,
} from "../config/constants.js";

export default class ValidatePurchaseAmount {
  static validate(amount) {
    const parsedAmount = parseInt(amount, 10);

    if (amount.includes("-")) {
      throw new Error(ERROR_MESSAGES.purchaseAmountInvalid);
    }

    if (!/^\d+$/.test(amount)) {
      throw new Error(ERROR_MESSAGES.purchaseAmountNotANumber);
    }

    if (parsedAmount <= 0 || parsedAmount % LOTTO_UNIT_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.purchaseAmountInvalid);
    }

    if (parsedAmount > LOTTO_POSSIBLE_MAX_PRICE) {
      throw new Error(ERROR_MESSAGES.purchaseAmountExceedsLimit);
    }
  }
}
