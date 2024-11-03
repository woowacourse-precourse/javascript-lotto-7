import ERROR_MESSAGES from '../utills/errors.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumbersLength(numbers);
    this.#validateNumbersDuplication(numbers);
    this.#validateEachNumberInRange(numbers);
  }

  #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO.INVALID_LENGTH);
    }
  }

  #validateNumbersDuplication(numbers) {
    const numbersSet = new Set(numbers);
    if (numbers.length !== numbersSet.size) {
      throw new Error(ERROR_MESSAGES.LOTTO.DUPLICATE_NUMBERS);
    }
  }

  #validateEachNumberInRange(numbers) {
    const isValid = numbers.every((number) => number >= 1 && number <= 45);
    if (!isValid) {
      throw new Error(ERROR_MESSAGES.LOTTO.INVALID_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
