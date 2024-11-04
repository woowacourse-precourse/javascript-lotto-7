import { validateNumbers } from "./utils/validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    try {
      validateNumbers(numbers);
    } catch (error) {
      throw new Error("[ERROR]", error.message);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getNumbersByOrder() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
