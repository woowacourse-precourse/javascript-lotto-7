import { COMMA, ERROR_MESSAGES } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_LENGTH);
    }
    if (numbers.some((number) => number < 1 || number > 45 || !Number.isInteger(number))) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_RANGE);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_DUPLICATE);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(`${COMMA} `)}]`;
  }

  matchNumbersCount(lotto) {
    const allNumbers = this.#numbers.concat(lotto.#numbers);
    return allNumbers.length - new Set(allNumbers).size;
  }
}

export default Lotto;
