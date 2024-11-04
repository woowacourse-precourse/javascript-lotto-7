import ERROR from './constants/errors.js';
import { LOTTO } from './constants/lotto.js';

class Lotto {
  #numbers;

  constructor (numbers) {
    Lotto.#validate(numbers);
    this.#numbers = new Set(numbers);
  }

  static #validate (numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.MUST_HAS_6_NUMBERS);
    }
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error(ERROR.NUMBER_IS_DUPLICATED);
    }
    numbers.forEach((value) => {
      if (value < LOTTO.NUMBER_RANGE.MIN || LOTTO.NUMBER_RANGE.MAX < value) {
        throw new Error(ERROR.LOTTO.NUMBER_OUT_OF_RANGE);
      }
    });
  }

  // TODO: 추가 기능 구현
  get numbers () {
    return Array.from(this.#numbers);
  }

  has (number) {
    return this.#numbers.has(number);
  }
}

export default Lotto;
