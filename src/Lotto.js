import { LOTTO_ERROR_MESSAGE } from "./constants.js";

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
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
