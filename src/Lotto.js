import { ERROR } from './constants/Constants.js';

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

    const checkSet = new Set(numbers);
    numbers.forEach((num) => {
      if (checkSet.has(num)) {
        throw new Error(ERROR.LOTTO_REPEAT);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
