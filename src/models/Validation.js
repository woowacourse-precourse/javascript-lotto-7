import { ERROR_MESSAGES, CustomError } from "../constants/Errors.js";

class Validation {
  static ispurchaseMoneyValidated(purchaseMoneyInput) {
    if (Number.isNaN(Number(purchaseMoneyInput))) {
      throw new CustomError(
        "InvalidLottoPurchaseAmount Type",
        ERROR_MESSAGES.invalidLottoPurchaseAmountType
      );
    }

    if (Number(purchaseMoneyInput) % 1000) {
      throw new CustomError(
        "InvalidLottoPurchaseAmount",
        ERROR_MESSAGES.invalidLottoPurchaseAmount
      );
    }

    if (purchaseMoneyInput === "" || Number(purchaseMoneyInput) <= 0) {
      throw new CustomError(
        "InvalidLottoPurchaseAmountZero",
        ERROR_MESSAGES.invalidLottoPurchaseAmountZero
      );
    }
  }
}

export default Validation;
