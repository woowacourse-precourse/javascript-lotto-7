import InputValidator from '../validator/InputValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    InputValidator.validateNumbers(numbers, numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
