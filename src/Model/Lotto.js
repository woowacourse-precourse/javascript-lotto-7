import { LOTTO_ERROR_MESSAGE } from "../utils/Message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.LENGTH_SIX);
    }
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATION);
    }
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE);
      }
      if (Number.isNaN(num)) {
        throw new Error(LOTTO_ERROR_MESSAGE.ISNAN);
      }
      if (num === "") {
        throw new Error(LOTTO_ERROR_MESSAGE.EMPTY);
      }
    });
  }
  getLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
