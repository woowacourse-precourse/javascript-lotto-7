import { ERROR } from './constants/Constants.js';
import Validators from './utils/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(ERROR.LOTTO_TYPE);
      }
    });

    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_ARRAY_COUNT);
    }

    Validators.checkLotto(numbers);

    if (numbers.some((num) => (num < 1) | (num > 45))) {
      throw new Error(ERROR.LOTTO_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
