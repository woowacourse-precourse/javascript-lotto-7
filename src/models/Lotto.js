import throwError from '../utils/throwError.js';
import { LOTTO_NUMBER_COUNT, LOTTO_NUMBER_DUPLICATED } from '../constants/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#setNumbersOrdered(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throwError(LOTTO_NUMBER_COUNT);
    }
    if (new Set(numbers).size !== 6) {
      throwError(LOTTO_NUMBER_DUPLICATED);
    }
  }

  #setNumbersOrdered(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
