import ValidateLotto from './validator/ValidateLotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validator = new ValidateLotto();
    validator.checkAll(numbers);
  }
}

export default Lotto;
