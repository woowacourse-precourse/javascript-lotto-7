import { ERROR_MESSAGE } from "../utils/constants.js";
import outputView from "../views/outputView.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      outputView.throwErrorMessage(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }

    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      outputView.throwErrorMessage(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    const outOfRange = numbers.some((num) => num < 1 || num > 45);
    if (outOfRange) {
      outputView.throwErrorMessage(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
