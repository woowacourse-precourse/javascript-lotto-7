import { ERROR_MESSAGES, REGEX } from '../constant/constant.js';
import {
  checkIsEmpty,
  checkAllNumbersInRange,
  checkDuplicate,
  checkLength,
  throwValidationError,
} from '../utils/validation.js';

class WinningNumbers {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#parseWinningNumbers(numbers);
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  #parseWinningNumbers(numbers) {
    return numbers.split(',').map(Number);
  }

  #validate(numbers) {
    checkIsEmpty(numbers);
    this.#checkWinningNumberFormat(numbers);

    const parsedNumbers = this.#parseWinningNumbers(numbers);
    checkLength(parsedNumbers);
    checkDuplicate(parsedNumbers);
    checkAllNumbersInRange(parsedNumbers);
  }

  #checkWinningNumberFormat(numbers) {
    if (!REGEX.IS_VALID_WINNING_NUMBERS.test(numbers)) {
      throwValidationError(ERROR_MESSAGES.INVALID_WINNING_NUMBER_FORMAT);
    }
  }
}

export default WinningNumbers;
