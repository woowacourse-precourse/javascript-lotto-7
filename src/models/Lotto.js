import { LOTTO_NUMBER_DELIMITER } from "../libs/constants.js";
import LottoValidator from "../libs/validator.js";
import { printResult } from "../libs/utils.js";

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidator.validateLottoNumberLength(numbers);
    LottoValidator.validateUniqueNumbers(numbers);
    LottoValidator.validateArrayHasNumberType(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  join() {
    return `[${this.#numbers.join(LOTTO_NUMBER_DELIMITER)}]`;
  }

  print() {
    printResult(this.join());
  }
}

export default Lotto;
