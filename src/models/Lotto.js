import LottoNumberValidator from '../validators/LottoNumberValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoNumberValidator.validate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
