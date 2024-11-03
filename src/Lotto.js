import { ERROR_MESSAGE } from "./constants/error.js";
import { LOTTO_COUNT, LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "./constants/lotto.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((number) => this.#validateNumber(number));
    this.#validateCount(numbers);
    numbers.forEach((number) => this.#validateRange(number));
    this.#validateDuplicate(numbers);
  }

  #validateNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
    }
  }

  #validateCount(numbers) {
    if (numbers.length !== LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_COUNT);
    }
  }

  #validateRange(number) {
    if (number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO_COUNT) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_LOTTO_NUMBER);
    }
  }
}

export default Lotto;
