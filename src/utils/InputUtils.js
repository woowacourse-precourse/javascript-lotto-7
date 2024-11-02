import { ERROR_MESSAGE, WINNING_NUMBER_MESSAGE } from "../constant/constant.js";

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

  static validateWinningNumber(input) {
    if (input.some((num) => !num || isNaN(num) || num <= 0)) {
      throw new Error(WINNING_NUMBER_MESSAGE.INVALID_WINNING_NUMBER);
    }
    if (input.length !== 6) {
      throw new Error(WINNING_NUMBER_MESSAGE.NOT_SIX_NUMBER);
    }

    if (new Set(input).size !== input.length) {
      throw new Error(WINNING_NUMBER_MESSAGE.NOT_SAME_NUMBER);
    }

    if (input.some((num) => num < 1 || num > 45)) {
      throw new Error(WINNING_NUMBER_MESSAGE.NOT_RANGE_NUMBER);
    }
  }
}

export default InputUtils;
