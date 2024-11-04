import { ERROR_MESSAGES } from "../Constants.js";
import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE);
    }
    if (numbers.some((n) => n < 1 || n > 45)) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
