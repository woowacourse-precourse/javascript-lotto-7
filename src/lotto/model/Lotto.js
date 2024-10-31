import { validateLottoNumbers } from '../LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers, numberCount, numberRange) {
    this.#validate(numbers, numberCount, numberRange);
    this.#numbers = this.#sortAscending(numbers);
  }

  #validate(numbers, numberCount, numberRange) {
    validateLottoNumbers(numbers, numberCount, numberRange);
  }

  #sortAscending(numbers) {
    return numbers.sort((number1, number2) => number1 - number2);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
