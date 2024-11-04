import { LOTTO } from './constant/index.js';
import { ERROR_MESSAGE } from './constant/error.js';

class Validator {
  purchaseAmount(amount) {
    this.#validateNaturalNumber(amount);
    this.#validateThousandUnit(amount);
  }

  winningNumbers(numbers) {
    numbers.forEach((num) => {
      this.#validateNaturalNumber(num);
      this.#validateRange(num, LOTTO.START_NUMBER, LOTTO.END_NUMBER);
    });
    this.#validateExactCount(numbers, LOTTO.COUNT);
    this.#validateNoDuplicates(numbers);
  }

  bonusNumber(bonusNumber, winningNumbers) {
    this.#validateNaturalNumber(bonusNumber);
    this.#validateRange(bonusNumber, LOTTO.START_NUMBER, LOTTO.END_NUMBER);
    this.#validateNoItemContained(bonusNumber, winningNumbers, '당첨 번호');
  }

  #validateNaturalNumber(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
    }
  }

  #validateThousandUnit(value) {
    if (value % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_THOUSAND_UNIT);
    }
  }

  #validateRange(value, min, max) {
    if (value < min || value > max) {
      throw new Error(`${ERROR_MESSAGE.NOT_VALID_RANGE} (${min}~${max})`);
    }
  }

  #validateNoDuplicates(arr) {
    if (new Set(arr).size !== arr.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
  }

  #validateExactCount(arr, count) {
    if (arr.length !== count) {
      throw new Error(ERROR_MESSAGE.NOT_EXACT_COUNT(count));
    }
  }

  #validateNoItemContained(item, arr, arrName) {
    if (arr.includes(item)) {
      throw new Error(ERROR_MESSAGE.ITEM_CONTAINED(arrName));
    }
  }
}

export default Validator;
