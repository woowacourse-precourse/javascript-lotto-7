import { LOTTO_NUMBER_DELIMITER } from "./libs/constants.js";
import { printResult } from "./libs/utils.js";
import { validateLottoNumberLength, validateNumberType, validateUniqueNumbers } from "./libs/validate.js";

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    validateLottoNumberLength(numbers);
    validateUniqueNumbers(numbers);
    return numbers.map(validateNumberType);
  }

  join() {
    return `[${this.#numbers.join(LOTTO_NUMBER_DELIMITER)}]`;
  }

  print() {
    printResult(this.join());
  }
}

export default Lotto;
