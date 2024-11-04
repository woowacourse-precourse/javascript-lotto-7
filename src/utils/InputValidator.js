import ERROR_MESSAGES from '../constants/errorMessages.js';

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
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_LENGTH);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
    }
    numbers.forEach((number) => {
      if (!Number.isInteger(number) || number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER_RANGE);
      }
    });
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default InputValidator;
