import { WINNING_NUMBER_VALIDATION } from '../Validator/winningNumberValidation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    WINNING_NUMBER_VALIDATION(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
