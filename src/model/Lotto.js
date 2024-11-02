import Validator from '../utils/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  getNumber() {
    return this.#numbers;
  }

  toString() {
    return this.#numbers.join(', ');
  }
}

export default Lotto;
