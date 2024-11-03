import {
  ERROR_MESSAGE,
  LOTTO_COUNT_MAX,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
} from "./constants.js";
import { hasDuplicatesArr } from "./util/duplicateCheck.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_COUNT_MAX) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_LENGTH_ERROR);
    }
    numbers.forEach((value) => {
      if (isNaN(value) || value === "") {
        throw new Error(ERROR_MESSAGE.WINNING_LOTTO_NUMBER_ERROR);
      }
      if (
        Number(value) > LOTTO_MAX_NUMBER ||
        Number(value) < LOTTO_MIN_NUMBER
      ) {
        throw new Error(ERROR_MESSAGE.WINNING_LOTTO_MAX_MIN_ERROR);
      }
    });
    if (hasDuplicatesArr(numbers)) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_NUMBER_DUPLICATE_ERROR);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
