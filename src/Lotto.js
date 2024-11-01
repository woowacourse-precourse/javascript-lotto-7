import { ERROR } from "./util/constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_LOTTO_COUNT);
    }
  }

  // TODO: 추가 기능 구현
  // ascending order of the lotto numbers
  getNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  };
}

export default Lotto;
