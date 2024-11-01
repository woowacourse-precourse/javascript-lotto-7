import { ConsoleIO } from '../io/index.js';
import { LottoValidator } from '../services/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validate(numbers);
    this.#numbers = numbers;
    this.#printNumbers();
  }

  #printNumbers() {
    ConsoleIO.print(`[${this.#numbers.join(', ')}]`);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
