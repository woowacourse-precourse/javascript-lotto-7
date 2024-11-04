import { DELIMITER } from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!numbers) {
      throw new Error(ERROR_MESSAGES.EMPTY_LOTTO_NUMBERS);
    }

    if (numbers.some((number) => isNaN(number))) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBERS);
    }

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_COUNT);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBERS);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getLottoNumbersToString() {
    return `[${this.#numbers.join(DELIMITER)}]`;
  }
}

export default Lotto;
