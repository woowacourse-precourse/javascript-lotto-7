import { ERROR } from "../constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.INVALID_NUMBER_COUNT);
    }
    if ([...new Set(numbers)].length !== numbers.length) {
      throw new Error(ERROR.LOTTO.CANT_BE_DUPLICATED);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
