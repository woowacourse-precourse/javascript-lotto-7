import { errorMessage } from './constant/errorMessage.js';
import { checkDuplication } from './utils/checkDuplication.js';
import { checkNumbersRange } from './utils/checkNumbersRange.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${errorMessage.prefix} ${errorMessage.invalidLotto}`);
    }

    if (checkDuplication(numbers)) {
      throw new Error(`${errorMessage.prefix} ${errorMessage.duplicatedNumber}`);
    }

    if (!checkNumbersRange(numbers)) {
      throw new Error(`${errorMessage.prefix} ${errorMessage.invalidNumberRange}`);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
