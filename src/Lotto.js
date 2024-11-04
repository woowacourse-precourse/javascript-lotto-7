import { validateLottoNumbers } from './validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLottoNumbers(numbers);
  }

  get numbers() {
    return JSON.parse(JSON.stringify(this.#numbers));
  }
}

export default Lotto;
