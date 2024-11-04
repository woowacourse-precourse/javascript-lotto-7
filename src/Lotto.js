import { LOTTO_ERROR_MESSAGE, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.INVALID_COUNT);
    }
    else if (new Set(numbers).size !== numbers.length) {
      throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(LOTTO_ERROR_MESSAGE.IS_NOT_NUMBER);
      }
      else if (!Number.isInteger(number)) {
        throw new Error(LOTTO_ERROR_MESSAGE.IS_NOT_INTEGER);
      }
      else if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
        throw new Error(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
