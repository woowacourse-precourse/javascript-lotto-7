import Errors from "./constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Errors.lotto.NOT_SIX_NUMBER);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(Errors.lotto.NOT_UNIQUE_NUMBER);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(Errors.lotto.NOT_VALID_RANGE);
    }

    if (numbers.some((number) => isNaN(number))) {
      throw new Error(Errors.lotto.NOT_NUMBER);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
