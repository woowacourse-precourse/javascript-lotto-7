import { createLottoNumberValidator } from '../validate/ValidatorCreator.js';

const validator = createLottoNumberValidator();

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortAscending(numbers);
  }

  #validate(numbers) {
    validator.validateLottoNumbers(numbers);
  }

  #sortAscending(numbers) {
    return numbers.sort((number1, number2) => number1 - number2);
  }

  get numbers() {
    return this.#numbers;
  }

  isExistNumberInNumbers(number) {
    return this.#numbers.some(myNumber => myNumber === Number(number));
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
