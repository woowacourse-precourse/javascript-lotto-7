import { ERROR_MESSAGE as ERROR } from "./constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_NUMBERS_LENGTH);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR.INVALID_NUMBERS_RANGE);
    }

    if (numbers.some((number) => isNaN(number))) {
      throw new Error(ERROR.NOT_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
  get getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
