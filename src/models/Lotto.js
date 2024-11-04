import { LOTTO_INFO } from "../constants/LottoInfo.js";
import { ERROR_MESSAGE } from "../constants/Message.js";

class Lotto {
  #numbers;

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
    if (numbers.length !== LOTTO_INFO.lottoMaxLength) {
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
    const isNumbers = numbers.every((num) => Number.isInteger(num));
    if (!isNumbers) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_ONLY);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
