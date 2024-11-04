import { ERROR_MESSAGES, LOTTO_NUMBERS } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.checkNumbersCount(numbers);
    this.checkNumberType(numbers);
    this.checkDuplicateNumbers(numbers);
    this.checkNumberRange(numbers);
  }

  checkNumbersCount(numbers) {
    if (numbers.length !== LOTTO_NUMBERS.COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT);
    }
  }

  checkNumberType(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER_TYPE);
      }
    });
  }

  checkDuplicateNumbers(numbers) {
    if (new Set(numbers).size !== LOTTO_NUMBERS.COUNT) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
    }
  }

  checkNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < LOTTO_NUMBERS.MIN || number > LOTTO_NUMBERS.MAX) {
        throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER_RANGE);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
