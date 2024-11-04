import { CONFIG, MESSAGES } from '../constants';
import { LottoValidator } from '../services';
import { Printer } from '../io';

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validate(numbers);
    this.#numbers = numbers;
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
