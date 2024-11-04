import { ERROR_MESSAGE, LOTTO_NUMBER_COUNT, LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN } from './lottoConstants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateCounts(numbers);
    this.#validateNoDuplicates(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validateCounts(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }
  }

  #validateNoDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  #validateRange(numbers) {
    numbers.forEach(number => {
      if (number < LOTTO_NUMBER_MIN || number > LOTTO_NUMBER_MAX) {
        throw new Error(ERROR_MESSAGE.INVALID_RANGE);
      }
    });
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
