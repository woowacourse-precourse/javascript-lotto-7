import validateLottoNumbers from '../validations/validateLottoNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return this.#numbers;
  }
  
  #validate(numbers) {
    validateLottoNumbers(numbers);
  }
}

export default Lotto;
