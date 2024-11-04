import validateWinning from './validations/WinningInputValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateWinning(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
