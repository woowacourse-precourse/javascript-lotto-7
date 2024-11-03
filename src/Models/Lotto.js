import validator from '../Validators/Validator.js';
import { LOTTO_NUMBERS_RULES } from '../Validators/Rules.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    const sortNumbers = this.#sortNumbers(numbers);
    this.#numbers = sortNumbers;
  }

  #validate(numbers) {
    validator(numbers, LOTTO_NUMBERS_RULES);
  }

  #sortNumbers(numbers) {
    const sortNumber = numbers.sort((a, b) => a - b);
    return sortNumber;
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
