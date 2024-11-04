import { ERROR_MESSAGES } from "../constant/errors.js";
import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_COUNT,
} from "../constant/number.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumbersCount(numbers);
    this.#validateNumbersType(numbers);
    this.#validateNumberUniqueness(numbers);
    this.#validateNumberRange(numbers);
  }
  #validateNumbersType(numbers) {
    console.log(numbers, "!!");
    if (
      numbers.some((number) => isNaN(number) || parseInt(number) !== number)
    ) {
      throw Error(ERROR_MESSAGES.invalid_lotto_number_type);
    }
  }
  #validateNumbersCount(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw Error(ERROR_MESSAGES.invalid_lotto_number_count);
    }
  }
  #validateNumberUniqueness(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw Error(ERROR_MESSAGES.invalid_lotto_number_uniqueness);
    }
  }
  #validateNumberRange(numbers) {
    if (
      numbers.some(
        (number) => number < LOTTO_NUMBER_MIN || number > LOTTO_NUMBER_MAX
      )
    ) {
      throw Error(ERROR_MESSAGES.invalid_lotto_number_range);
    }
  }
  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
