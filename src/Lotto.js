import { errorMessage } from './constant/errorMessage.js';
import { checkDuplication } from './utils/checkDuplication.js';
import { checkNumbersRange } from './utils/checkNumbersRange.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
