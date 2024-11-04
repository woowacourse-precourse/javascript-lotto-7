import { ERROR_MESSAGES } from './constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_COUNT);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
    numbers.forEach((number) => {
      if (!Number.isInteger(number) || number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
      }
    });
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
