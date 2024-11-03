import { ERROR_MSG } from '../constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MSG.INVALID_WINNING_NUMBERS);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
