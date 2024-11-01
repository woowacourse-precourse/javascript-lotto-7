import { LOTTO_NUMBER_ERROR } from './constants/errorMessage';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some((number) => isNaN(number))) {
      throw new Error(LOTTO_NUMBER_ERROR.NOT_NUMBER);
    }
    if (numbers.length !== 6) {
      throw new Error(LOTTO_NUMBER_ERROR.NOT_SIX_LENGTH);
    }
    if (numbers.some((number) => number <= 0 || number > 45)) {
      throw new Error(LOTTO_NUMBER_ERROR.NOT_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
