import {
  BONUS_NUMBER_MESSAGE,
  ERROR_MESSAGE,
  WINNING_NUMBER_MESSAGE,
} from "../constant/constant.js";

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

  static validateBonusNumber(input, winningNumbers) {
    if (!input || isNaN(input) || input <= 0) {
      throw new Error(BONUS_NUMBER_MESSAGE.INVALID_BONUS_NUMBER);
    }

    if (input < 1 || input > 45) {
      throw new Error(BONUS_NUMBER_MESSAGE.NOT_RANGE_NUMBER);
    }
    if (winningNumbers.includes(input[0])) {
      throw new Error(BONUS_NUMBER_MESSAGE.WINNING_IN_BONUS);
    }
  }

  static async validInput(inputFunction, validateFunction, outputView) {
    while (true) {
      try {
        const inputs = await inputFunction();
        const trimmedInputs = inputs
          .split(",")
          .map((input) => Number(input.trim()));
        validateFunction(trimmedInputs);
        return trimmedInputs;
      } catch (error) {
        outputView.errorOccurred(error);
      }
    }
  }
}

export default InputUtils;
