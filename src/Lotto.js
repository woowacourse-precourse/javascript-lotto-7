import { LOTTO, ERROR_MESSAGE } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }

    if (new Set(numbers).size !== LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    if (!this.#isValidRange(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #isValidRange(numbers) {
    return numbers.every(
      (num) => num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER
    );
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
