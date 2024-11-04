import { ERROR_MESSAGE } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.OVER_LENGTH_NUMBER);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error(ERROR_MESSAGE.OVER_NUMBER);
    }

    if (numbers.some((num) => Number.isNaN(num))) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }

  #sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
