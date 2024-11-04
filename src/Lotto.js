import ERROR_MESSAGES from './constants/errorMessages.js';
import { LOTTO_VALUES } from './constants/values.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_VALUES.LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_COUNT);
    }
    if (new Set(numbers).size !== LOTTO_VALUES.LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < LOTTO_VALUES.MIN_RANDOM_VALUE ||
        number > LOTTO_VALUES.MAX_RANDOM_VALUE
      ) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
      }
    });
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
