import { OutputComment } from './Constants/display.js';
import Errors from './Constants/Errors.js';
import { throwError } from './Utils/handleError.js';
import Rules from './Utils/Rules.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (Rules.isWrongLength(numbers, 6))
      throwError(Errors.Lotto.IS_WRONG_LENGTH);
    if (Rules.isNotNumberInNumbers(numbers))
      throwError(Errors.Lotto.NOT_NUMBER_VALUE);
    if (Rules.isDuplicatedValue(numbers))
      throwError(Errors.Lotto.IS_DUPLICATE_VALUE);
    if (Rules.isNotRangedValueInNumbers(numbers))
      throwError(Errors.Lotto.NOT_RANGED_VALUE);
  }

  getNumbers() {
    return this.#numbers;
  }

  getPrintString() {
    return `[${this.#numbers.join(OutputComment.SEPERATOR)}]`;
  }
}

export default Lotto;
