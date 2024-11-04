import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.lottoNumbers(numbers);
  }

  formatSortedNumber() {
    return this.#numbers.sort((a, b) => a - b).join(', ');
  }

  get() {
    return this.#numbers;
  }
}

export default Lotto;
