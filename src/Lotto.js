import { ERROR_MESSAGES } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_LENGTH);
    if (
      numbers.some((number) => number < 1 || number > 45) ||
      numbers.some((number) => !Number.isInteger(number))
    ) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_RANGE);
    }
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_DUPLICATE);
  }

  // TODO: 추가 기능 구현
  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
