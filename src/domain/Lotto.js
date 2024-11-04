import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLottoNumber(numbers);
    this.#validateNumberIsInteger(numbers);
    numbers.forEach((number) => {
      this.#validateNumberRange(number);
      const checkDuplicate = numbers.filter((el) => (el === number));
      this.#validateIsDuplicate(checkDuplicate);
    });
  }

  #validateLottoNumber(input) {
    if (input.length !== LOTTO_SETTINGS.numberLength) {
      throw new Error(LOTTO_MESSAGES.error.numberCountNotSix);
    }
  }

  #validateIsDuplicate(input) {
    if (input.length > LOTTO_SETTINGS.minNumber) {
      throw new Error(LOTTO_MESSAGES.error.duplicatedNumber);
    }
  }

  #validateNumberRange(number) {
    if (number <= 0 || number >= 46) {
      throw new Error(LOTTO_MESSAGES.error.numberRangeOver);
    }
  }

  #validateNumberIsInteger(input) {
    input.forEach((number) => this.#validateIsInteger(number));
  }

  #validateIsInteger(input) {
    if (!Number.isInteger(input)) {
      throw new Error(LOTTO_MESSAGES.error.canNotUseDecimal);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
