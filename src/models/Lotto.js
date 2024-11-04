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

  #printNumbers() {
    Printer.print(MESSAGES.eachNumbers(this.#numbers.join(CONFIG.numbersOutputDelimiter)));
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
