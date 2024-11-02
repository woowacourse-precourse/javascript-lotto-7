import Validator from './utils/Validator.js';
import { ERROR_MESSAGES } from './constants/messages.js';
import { LOTTO_VALUES } from './constants/lottoConstants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Lotto.#checkValidLength(numbers);
    numbers.forEach((num) => {
      Validator.checkValidRange(
        num,
        LOTTO_VALUES.MIN_NUMBER,
        LOTTO_VALUES.MAX_NUMBER,
        ERROR_MESSAGES.INVALID_LOTTO_RANGE,
      );
    });
    Lotto.#checkDuplicateNum(numbers);
  }

  getNumbers() {
    return this.#numbers.map((num) => parseInt(num, 10));
  }

  static #checkDuplicateNum(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
    }
  }

  static #checkValidLength(numbers) {
    if (numbers.length !== LOTTO_VALUES.LOTTO_COUNT)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
  }
}

export default Lotto;
