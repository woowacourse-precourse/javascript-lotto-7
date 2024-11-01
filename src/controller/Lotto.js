import Validator from './Validator.js';
import { parseNumbers } from '../utils/Parser.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateWinningNumbers(numbers);
    this.#numbers = parseNumbers(numbers);
  }
}

export default Lotto;
