import errorMessages from "./constants/errorMessages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumsLength(numbers);
    this.#validateNumsInRange(numbers);
    this.#validateNumsDuplicate(numbers);
  }

  #validateNumsLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(errorMessages.INVALID_NUMBERS_LENGTH);
    }
  }

  #validateNumsInRange(numbers) {
    numbers.map((num) => {
      if (1 > num || num > 45)
        throw new Error(errorMessages.INVALID_NUMBERS_RANGE);
    });
  }

  #validateNumsDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length)
      return new Error(errorMessages.INVALID_DUPLICATE_NUMBER);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
