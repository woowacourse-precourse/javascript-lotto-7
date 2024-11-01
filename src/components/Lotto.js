import { sortNumbers } from '../utils/NumberUtils.js';
import validateLotto from '../utils/validation/validateLotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = sortNumbers(numbers);
  }

  #validate(numbers) {
    validateLotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
