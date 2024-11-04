import { LOTTO, ERROR_MESSAGE } from '../shared/constants/constants.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.SIZE) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }
    if (new Set(numbers).size !== LOTTO.SIZE) {
      throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
