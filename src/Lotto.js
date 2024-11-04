import { Errors } from "./constants.js";

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

    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(Errors.lotto.NOT_INTEGER_NUMBER);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchedCount(winningNumbers) {
    const matchedCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;
    return matchedCount;
  }

  getIsBonusMatch(bonusNumber) {
    const bonusMatch = this.#numbers.includes(bonusNumber);
    return bonusMatch;
  }
}

export default Lotto;
