import { LOTTO, ERROR_MESSAGE } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    this.#validateNumberArray(numbers);
    this.#validateLength(numbers);
    this.#validateDuplicates(numbers);
    this.#validateRange(numbers);
  }

  #validateNumberArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }

    if (numbers.some((num) => !Number.isInteger(num))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }
  }

  #validateDuplicates(numbers) {
    if (new Set(numbers).size !== LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  #validateRange(numbers) {
    if (
      numbers.some((num) => num < LOTTO.MIN_NUMBER || num > LOTTO.MAX_NUMBER)
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
