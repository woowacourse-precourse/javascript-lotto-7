import { ERROR_MSG, LOTTO_NUMBER_RANGE } from '../constants/constants.js';
import { asendingSort, checkDuplicate, checkRange } from '../util/util.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateCount(numbers);
    this.validateRange(numbers);
    this.validateDuplicate(numbers);

    this.#numbers = asendingSort(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MSG.invalidNumberCount);
    }
  }

  validateRange(numbers) {
    numbers.forEach((number) => {
      if (checkRange(number, LOTTO_NUMBER_RANGE.min, LOTTO_NUMBER_RANGE.max)) {
        throw Error(ERROR_MSG.outOfLottoRange);
      }
    });
  }

  validateDuplicate(numbers) {
    if (checkDuplicate(numbers)) {
      throw Error(ERROR_MSG.duplicateNumber);
    }
  }
}
export default Lotto;
