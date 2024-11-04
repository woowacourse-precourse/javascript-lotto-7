import Validator from '../controller/Validator.js';
import { parseNumbers } from '../utils/Parser.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // Validator.checkLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
