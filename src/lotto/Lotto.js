import CustomError from "../CustomError.js";
import { LOTTO_MESSAGES, LOTTO_RULES } from "../constants/index.js";
import { hasDuplicate, isNotPositiveInteger, isInRange } from "../utils/validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_NUMBER_COUNT);
    }

    if (hasDuplicate(numbers)) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_DUPLICATE_NUMBER);
    }

    if (numbers.some((number) => isNotPositiveInteger(number))) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_NON_POSITIVE_INTEGER);
    }

    const { MIN_RANGE, MAX_RANGE } = LOTTO_RULES;
    if (numbers.some((number) => !isInRange(MIN_RANGE, MAX_RANGE, number))) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_RANGE_NUMBER);
    }
  }
}

export default Lotto;
