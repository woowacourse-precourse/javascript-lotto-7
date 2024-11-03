import LottoValidator from './domain/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const lottoValidator = new LottoValidator();
    lottoValidator.validateLottoNumber(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
