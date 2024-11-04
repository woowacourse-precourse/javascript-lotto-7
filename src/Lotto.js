import { validateWinningNumbers } from "./utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    validateWinningNumbers(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  matchCount(targetNumbers) {
    return this.#numbers.filter(num => targetNumbers.includes(num)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
