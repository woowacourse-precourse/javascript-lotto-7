import { ERROR_MESSAGE } from "./constants/message.js";
import { LOTTO } from "./constants/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static changeStringToArray(inputNumbers) {
    return inputNumbers.split(",").map((num) => Number(num.trim()));
  }

  #validate(numbers) {
    const pormattedNumbers = Lotto.changeStringToArray(numbers);
    this.#validateArrayLength(pormattedNumbers);
    this.#validateNumericValues(pormattedNumbers);
    this.#validateNumberRange(pormattedNumbers);
    this.#validateUniqueNumbers(pormattedNumbers);
  }

  #validateArrayLength(numbers) {
    if (numbers.length !== LOTTO.length) {
      throw new Error(ERROR_MESSAGE.out_of_length_lotto);
    }
  }

  #validateNumericValues(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGE.non_numeric_lotto);
      }
    });
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < LOTTO.minimum || number > LOTTO.maximum) {
        throw new Error(ERROR_MESSAGE.out_of_range_lotto);
      }
    });
  }

  #validateUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicate_lotto);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
