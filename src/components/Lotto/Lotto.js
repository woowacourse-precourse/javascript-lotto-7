import validateLottoNumbers from '../../utils/validator/validateLottoNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.toSorted((a, b) => a - b);
  }

  #validate(numbers) {
    validateLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
