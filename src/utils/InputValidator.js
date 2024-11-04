import ERROR_MESSAGES from '../constants/errorMessages.js';
import { LOTTO_VALUES } from '../constants/values.js';

class InputValidator {
  static validatePurchaseAmount(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_INPUT);
    }
    if (amount < 1000) {
      throw new Error(ERROR_MESSAGES.MINIMUM_AMOUNT);
    }
    if (amount > Number.MAX_SAFE_INTEGER) {
      throw new Error(ERROR_MESSAGES.MAXIMUM_AMOUNT);
    }
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    }
  }

  static validateWinningNumbers(numbers) {
    if (numbers.length !== LOTTO_VALUES.LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_LENGTH);
    }
    if (new Set(numbers).size !== LOTTO_VALUES.LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
    }
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < LOTTO_VALUES.MIN_RANDOM_VALUE ||
        number > LOTTO_VALUES.MAX_RANDOM_VALUE
      ) {
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER_RANGE);
      }
    });
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
    if (
      !Number.isInteger(bonusNumber) ||
      bonusNumber < LOTTO_VALUES.MIN_RANDOM_VALUE ||
      bonusNumber > LOTTO_VALUES.MAX_RANDOM_VALUE
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
  }
}

export default InputValidator;
