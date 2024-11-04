import ERRORS from "./constants/Errors.js";
import CONDITIONS from "./constants/Conditions.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== CONDITIONS.LOTTO_NUMBER_DRAWN) {
      throw new Error(ERRORS.NOT_6_NUMBERS);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== CONDITIONS.LOTTO_NUMBER_DRAWN) {
      throw new Error(ERRORS.NO_REPEATED_NUMBER);
    }

    if (!numbers.every((number) => number >= CONDITIONS.START_NUM && number <= CONDITIONS.END_NUM)) {
      throw new Error(ERRORS.NOT_1_TO_45);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  matches(winningLotto) {
    return this.#numbers.filter((number) => winningLotto.contains(number)).length;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }

  hasBonusNumber(bonusNumber) {
    return this.contains(bonusNumber);
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  static createRandomLotto(pickNumbersFunc) {
    const numbers = pickNumbersFunc();
    return new Lotto(numbers);
  }
}

export default Lotto;
