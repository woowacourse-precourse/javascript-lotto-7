import { ERROR_MESSAGE } from "../constant/constant.js";

class InputUtils {
  static trimInput(input) {
    return input.trim();
  }

  static validatePurchaseAmount(input) {
    if (!input || isNaN(input) || input <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }
    if (input % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_THOUSAND_PURCHASE_AMOUNT);
    }
  }
}

export default InputUtils;
