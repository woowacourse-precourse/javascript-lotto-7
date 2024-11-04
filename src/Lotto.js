import {
  LOTTO_NUMBER_ERROR,
  NOT_INVALID_INPUT,
} from './constants/errorMessage.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(NOT_INVALID_INPUT);
    }
    if (numbers.some((number) => isNaN(number))) {
      throw new Error(LOTTO_NUMBER_ERROR.NOT_NUMBER);
    }
    if (numbers.length !== 6) {
      throw new Error(LOTTO_NUMBER_ERROR.NOT_SIX_LENGTH);
    }
    if (numbers.some((number) => number <= 0 || number > 45)) {
      throw new Error(LOTTO_NUMBER_ERROR.NOT_RANGE);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(LOTTO_NUMBER_ERROR.NOT_DUPLICATED);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
