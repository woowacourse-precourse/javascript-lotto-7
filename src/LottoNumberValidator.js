import handleError from './utils/handleError.js';
import ERROR_MESSAGES from './constants/errorMessages.js';

class LottoNumberValidator {
  static isCountInvalid(winningNumbers) {
    if (winningNumbers.length !== 6) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_COUNT_INVALID);
    }
  }

  static isNumberDuplicate(winningNumbers) {
    const uniqueWinnigNumners = new Set(winningNumbers);

    if (uniqueWinnigNumners.size !== winningNumbers.length) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE);
    }
  }

  static isFormatInvalid(winningNumbers) {
    if (winningNumbers.some((number) => !Number.isInteger(number))) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_FORMAT_INVALID);
    }
  }

  static isOutOfRange(winningNumbers) {
    if (winningNumbers.some((number) => number > 45 || number < 1)) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_RANGE);
    }
  }

  static validateWinningNumber(inputWinningNumber) {
    const winningNumbers = inputWinningNumber.split(',').map(Number);
    this.isCountInvalid(winningNumbers);
    this.isNumberDuplicate(winningNumbers);
    this.isFormatInvalid(winningNumbers);
    this.isOutOfRange(winningNumbers);

    return winningNumbers;
  }
}

export default LottoNumberValidator;
