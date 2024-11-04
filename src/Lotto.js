import handleError from './utils/handleError.js';
import ERROR_MESSAGES from './constants/errorMessages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  isCountInvalid(winningNumbers) {
    if (winningNumbers.length !== 6) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_COUNT_INVALID);
    }
  }

  isNumberDuplicate(winningNumbers) {
    const uniqueWinnigNumners = new Set(winningNumbers);

    if (uniqueWinnigNumners.size !== winningNumbers.length) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE);
    }
  }

  isFormatInvalid(winningNumbers) {
    if (winningNumbers.some((number) => !Number.isInteger(number))) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_FORMAT_INVALID);
    }
  }

  isOutOfRange(winningNumbers) {
    if (winningNumbers.some((number) => number > 45 || number < 1)) {
      handleError(ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_RANGE);
    }
  }

  #validate(numbers) {
    this.isCountInvalid(numbers);
    this.isNumberDuplicate(numbers);
    this.isFormatInvalid(numbers);
    this.isOutOfRange(numbers);
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
