import { ERROR_MESSAGES } from "../constant/errors";
import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_COUNT,
} from "../constant/number";

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
    if (numbers.some((number) => isNaN(number))) {
      throw new Error(ERROR_MESSAGES.invalid_lotto_number_type);
    }
  }
  #validateNumbersCount(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.invalid_lotto_number_count);
    }
  }
  #validateNumberUniqueness(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.invalid_lotto_number_uniqueness);
    }
  }
  #validateNumberRange(numbers) {
    if (
      numbers.some(
        (number) => number < LOTTO_NUMBER_MIN || number > LOTTO_NUMBER_MAX
      )
    ) {
      throw new Error(ERROR_MESSAGES.invalid_lotto_number_range);
    }
  }
  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
