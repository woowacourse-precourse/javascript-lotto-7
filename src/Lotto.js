import { validateWinnerNumbers } from "./errors.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateWinnerNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
