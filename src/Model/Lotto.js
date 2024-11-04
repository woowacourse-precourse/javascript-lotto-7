import { number, errorMessage } from "../constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== number.LIMIT_LOTTO_COUNT) {
      throw new Error(errorMessage.IS_OUT_OF_RANGE_LOTTO_COUNT);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(errorMessage.IS_DUPLICATE_LOTTO_NUMBER);
    }

    const isOutOfRange = numbers.some(num => num < number.FIRST_LOTTO_NUM || num > number.LAST_LOTTO_NUM);
    if (isOutOfRange) {
      throw new Error(errorMessage.IS_OUT_OF_RANGE_LOTTO_COUNT);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
