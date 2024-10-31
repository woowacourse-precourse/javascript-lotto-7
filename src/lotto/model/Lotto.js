import { validateLottoNumbers } from '../LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers, numberCount, numberRange) {
    this.#validate(numbers, numberCount, numberRange);
    this.#numbers = numbers;
  }

  #validate(numbers, numberCount, numberRange) {
    validateLottoNumbers(numbers, numberCount, numberRange);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
