import { MESSAGES } from './constants/Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${MESSAGES.ERROR.LOTTO_NUMBER.INVALID_COUNT}`);
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(`${MESSAGES.ERROR.LOTTO_NUMBER.DUPLICATED_NUMBER}`);
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(`${MESSAGES.ERROR.LOTTO_NUMBER.INVALID_RANGE}`);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
