import { ERROR_MESSAGE } from "../constants/errorMessage";

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_LOTTO_NUMBER_COUNT);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}
