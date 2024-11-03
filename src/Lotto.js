import { ERROR_MESSAGES } from "./constants/constant";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }
    numbers.forEach((num) => {
      if (typeof num !== "number" || num < 1 || num > 45) {
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
      }
    });
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
