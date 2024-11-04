import { ERROR_MESSAGE } from './constants/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.ERROR_LOTTO_NUM_COUNT);
    }

    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error(ERROR_MESSAGE.ERROR_BONUS_NUM);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.ERROR_BONUS_SET);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
