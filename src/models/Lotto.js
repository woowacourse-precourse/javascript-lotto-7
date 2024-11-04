import { LOTTO_ERROR } from '../constants/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.lottoLengthError);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
