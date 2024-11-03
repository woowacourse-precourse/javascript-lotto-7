import { ERROR_MESSAGES, CustomError } from "../constants/Errors.js";

class Validation {
  static ispurchaseMoneyValidated(purchaseMoneyInput) {
    if (Number.isNaN(Number(purchaseMoneyInput))) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmountType);
    }

    if (Number(purchaseMoneyInput) % 1000) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmount);
    }

    if (purchaseMoneyInput === "" || Number(purchaseMoneyInput) <= 0) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmountZero);
    }
  }
}

export default Validation;
