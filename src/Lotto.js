import { validateNumbers } from './validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
