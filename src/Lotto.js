import { errorMessage } from './constant/errorMessage.js';
import { checkDuplication } from './utils/checkDuplication.js';
import { checkNumberRange } from './utils/checkNumberRange.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    console.log(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${errorMessage.prefix} ${errorMessage.invalidLotto}`);
    }

    if (checkDuplication(numbers)) {
      throw new Error(`${errorMessage.prefix} ${errorMessage.duplicateNumber}`);
    }

    if (!checkNumberRange(numbers)) {
      throw new Error(`${errorMessage.prefix} ${errorMessage.invalidNumberRange}`);
    }
  }

  get numbers() {
    return this.#numbers.join(', ');
  }
}

export default Lotto;
