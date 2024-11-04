import { validateWinningNumbers } from "./utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validateWinningNumbers(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
