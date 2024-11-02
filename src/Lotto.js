import { ERROR } from './constants/Constants.js';
import { validateLotto } from './utils/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_ARRAY_COUNT);
    }

    numbers.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(ERROR.LOTTO_TYPE);
      }
    });

    if (numbers.some((num) => (num < 1) | (num > 45))) {
      throw new Error(ERROR.LOTTO_RANGE);
    }

    validateLotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
