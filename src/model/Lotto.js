import { getRandomNumbersInRange } from '../utils/random.js';
import { validateLottoNumbers } from '../utils/validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  static create() {
    return new Lotto(getRandomNumbersInRange(1, 45, 6));
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
