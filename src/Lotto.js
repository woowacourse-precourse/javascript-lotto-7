import Validate from './utils/Validate.js';
import { Delimiters } from './constants/strings.js';
class Lotto {
  #numbers;
  constructor(numbers) {
    Validate.validateLottoNumbers(numbers);
    this.#numbers = numbers.sort((first, second) => first - second);
  }

  getNumbersWithSquareBrackets() {
    return `[${this.#numbers.join(Delimiters.COMMA_SPACE)}]`;
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
