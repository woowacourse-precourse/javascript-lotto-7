import {
  checkIsEmpty,
  checkLength,
  checkDuplicate,
  checkAllNumbersInRange,
} from '../utils/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortLotto(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  #sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    checkIsEmpty(numbers);
    checkLength(numbers);
    checkDuplicate(numbers);
    checkAllNumbersInRange(numbers);
  }
}

export default Lotto;
