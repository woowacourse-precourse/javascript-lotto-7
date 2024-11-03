import { MESSAGES } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(MESSAGES.ERROR.WINNING_NUMBERS_NOT_SIX);
    if (numbers.length !== new Set(numbers).size) throw new Error(MESSAGES.ERROR.WINNING_NUMBERS_DUPLICATION);
    numbers.forEach((num) => {
      if (isNaN(num)) throw new Error(MESSAGES.ERROR.WINNING_NUMBERS_NOT_NUMBER);
      if (num < 1 || num > 45) throw new Error(MESSAGES.ERROR.WINNING_NUMBERS_OUT_OF_RANGE);
    });

    return numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
