import { ERROR_MESSAGES, LOTTO } from '../utils/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.WINNING_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
