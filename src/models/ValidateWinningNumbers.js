import { WINNING_NUMBERS_MESSAGES } from '../constants/errorMessages.js';

class ValidateWinningNumbers {
  validateWinningNumbersFormat(input) {
    const winningNumbersRegex = /^(\d+,){5}\d+$/;

    if (!winningNumbersRegex.test(input)) {
      throw new Error(WINNING_NUMBERS_MESSAGES.INVALID_FORMAT);
    }
  }

  validateNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(WINNING_NUMBERS_MESSAGES.INVALID_RANGE);
    }
  }

  validateDuplicateNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(WINNING_NUMBERS_MESSAGES.DUPLICATE_NUMBERS);
    }
  }
}

export default ValidateWinningNumbers;
