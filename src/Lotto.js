import { ERROR_MESSAGE, RULE } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    this.#validateEmpty(numbers);
    this.#validateNumberType(numbers);
    this.#validateLength(numbers);
    this.#validateDuplication(numbers);
    this.#validateRange(numbers);
  }

  #validateEmpty(numbers) {
    if (numbers.includes('')) {
      throw new Error(ERROR_MESSAGE.NO_BLANK);
    }
  }

  #validateNumberType(numbers) {
    if (numbers.some(isNaN)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }

  #validateLength(numbers) {
    if (numbers.length !== RULE.LOTTO_BALL_NUMBER) {
      throw new Error(ERROR_MESSAGE.NOT_ENOUGH_NUMBERS(RULE.LOTTO_BALL_NUMBER));
    }
  }

  #validateDuplication(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.INPUT_DUPLICATION);
    }
  }

  #validateRange(numbers) {
    if (this.#isOutOfRange(numbers)) {
      throw new Error(
        ERROR_MESSAGE.OUT_OF_RANGE_NUMBER(RULE.LOTTO_MIN_NUMBER, RULE.LOTTO_MAX_NUMBER),
      );
    }
  }

  #isOutOfRange(numbers) {
    return numbers.some(
      (number) => number < RULE.LOTTO_MIN_NUMBER || number > RULE.LOTTO_MAX_NUMBER,
    );
  }

  get numbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
