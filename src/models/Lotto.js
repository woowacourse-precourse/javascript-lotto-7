import { ERROR_MESSAGE } from "../constants/Message.js";

class Lotto {
  #numbers;
  ㅊ;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLottoLength(numbers);
    this.#validateDuplicateNum(numbers);
    this.#validateNumberOnly(numbers);
  }

  #validateLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
  }

  #validateDuplicateNum(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_NUMBER);
    }
  }

  #validateNumberOnly(numbers) {
    const reg = /^[0-9]+$/;
    if (!reg.test(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_ONLY);
    }
  }
}

export default Lotto;
