import { CONFIG, MESSAGES } from '../constants/index.js';
import { LottoValidator } from '../services/index.js';
import { Printer } from '../io/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validate(numbers);

    const sortAscending = (a, b) => a - b;
    this.#numbers = numbers.sort(sortAscending);

    this.#printNumbers();
  }

  getNumbers() {
    return this.#numbers;
  }

  #printNumbers() {
    const message = MESSAGES.wrapNumbers(this.#numbers.join(CONFIG.numbersOutputDelimiter));
    Printer.print(message);
  }
}

export default Lotto;
