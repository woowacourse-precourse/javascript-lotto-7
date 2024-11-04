import {
  validateNumbersLength,
  validateNumberRange,
  validateDuplicatelottoNumber,
} from './validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateNumbersLength(numbers);
    validateDuplicatelottoNumber(numbers);

    numbers.forEach((number) => {
      validateNumberRange(number);
    });
  }

  #sortLottoNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  createLotto() {
    const lotto = this.#sortLottoNumbers();
    return lotto;
  }
}

export default Lotto;
