import { WINNING_NUMBERS_MESSAGES } from '../constants/errorMessages.js';
import { LOTTO, FORMAT } from '../constants/lottoConstants.js';

class ValidateWinningNumbers {
  validateWinningNumbersFormat(input) {
    const winningNumbersRegex = new RegExp(
      `^(\\d+${FORMAT.WINNING_NUMBERS_SEPARATOR}){${LOTTO.NUMBER.LENGTH - 1}}\\d+$`,
    );

    if (!winningNumbersRegex.test(input)) {
      throw new Error(WINNING_NUMBERS_MESSAGES.INVALID_FORMAT);
    }
  }

  validateNumberRange(number) {
    if (number < LOTTO.NUMBER.MIN || number > LOTTO.NUMBER.MAX) {
      throw new Error(WINNING_NUMBERS_MESSAGES.INVALID_RANGE);
    }
  }

  validateDuplicateNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== LOTTO.NUMBER.LENGTH) {
      throw new Error(WINNING_NUMBERS_MESSAGES.DUPLICATE_NUMBERS);
    }
  }
}

export default ValidateWinningNumbers;
