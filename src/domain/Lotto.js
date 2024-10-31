import LottoNumbersValidations from '../validations/LottoNumbersValidations.js';

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
    LottoNumbersValidations(numbers);
  }
}

export default Lotto;
