import { LOTTO_ERROR_MESSAGE } from "../constant/constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.sortLottoNumber();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.NOT_SIX_NUMBER);
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(LOTTO_ERROR_MESSAGE.NOT_RANGE_NUMBER);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(LOTTO_ERROR_MESSAGE.NOT_SAME_NUMBER);
    }
  }

  sortLottoNumber() {
    this.#numbers.sort((a, b) => a - b);
  }

  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
