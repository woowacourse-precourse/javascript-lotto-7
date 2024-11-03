/* eslint class-methods-use-this: ["error", { "exceptMethods": ["#validate"] }] */
import ERROR from './constants/ErrorMessage.js';
import LOTTO from './constants/Lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers; // 배열
    this.#validate();
    this.#isNaN();
    this.#inRange();
    this.#duplicate();
  }

  #validate() {
    if (this.#numbers.length !== LOTTO.LOTTO_NUMBER_COUNT) {
      throw `${ERROR.PREFIX + ERROR.COUNT}`;
    }
  }

  // TODO: 추가 기능 구현
  static empty(numbers) {
    if (numbers.trim() === '') {
      throw `${ERROR.PREFIX + ERROR.EMPTY}`;
    }
  }

  static delimiter(numbers) {
    const regex = new RegExp(`^\\d+(${LOTTO.WINNING_NUMBER_DELIMETER}\\d+)*$`);
    if (!regex.test(numbers)) {
      throw new Error(ERROR.PREFIX + ERROR.DELIMITER);
    }
    return numbers.split(LOTTO.WINNING_NUMBER_DELIMETER).map((n) => Number(n));
  }

  #isNaN() {
    this.#numbers.forEach((number) => {
      if (!Number.isInteger(number) || Number.isNaN(number)) {
        throw `${ERROR.PREFIX + ERROR.IS_NAN}`;
      }
    });
  }

  #inRange() {
    const result = this.#numbers.some(
      (number) =>
        Number(number) < LOTTO.MIN_LOTTO_NUMBER ||
        Number(number) > LOTTO.MAX_LOTTO_NUMBER,
    );
    if (result) {
      throw `${ERROR.PREFIX + ERROR.RANGE}`;
    }
  }

  #duplicate() {
    const numberSet = new Set([...this.#numbers]);
    if (this.#numbers.length !== numberSet.size) {
      throw `${ERROR.PREFIX + ERROR.WINNING_DUPLICATE}`;
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
