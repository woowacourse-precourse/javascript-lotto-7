import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.winningNumbers(numbers);
  }

  formatSortedNumber() {
    return this.#numbers.sort((a, b) => a - b).join(', ');
  }

  get() {
    return this.#numbers;
  }
}

export default Lotto;
