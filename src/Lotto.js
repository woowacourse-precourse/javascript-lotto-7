const errorMessages = require("./errors/errorMessages");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(errorMessages.AMOUNT_OVER_ERROR);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(errorMessages.SAME_NUMBER_ERROR);
    }
    if (numbers.some((num) => isNaN(num))) {
      throw new Error(errorMessages.NOT_NUMBER_ERROR);
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(errorMessages.RANGE_OVER_ERROR);
    }
  }

  getNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

module.exports = Lotto;
