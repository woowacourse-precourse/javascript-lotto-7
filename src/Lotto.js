import {
  ERROR_MESSAGES,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
} from "./config/constants.js";

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (
      !numbers.every(
        (num) => num >= LOTTO_NUMBER_MIN && num <= LOTTO_NUMBER_MAX
      )
    ) {
      throw new Error(ERROR_MESSAGES.lottoNumberOutOfRange);
    }

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.lottoNumberCountInvalid);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.lottoNumberDuplicate);
    }
  }
}
