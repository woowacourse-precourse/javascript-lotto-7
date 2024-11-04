import { LOTTO } from './constant';
import { ERROR_MESSAGE } from './constant/error';

class Validator {
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

  purchaseAmount(amount) {
    this.#validateNaturalNumber(amount);
    this.#validateThousandUnit(amount);
  }

  winningNumbers(numbers) {
    numbers.forEach((num) => {
      this.#validateNaturalNumber(num);
      this.#validateRange(num, LOTTO.START_NUMBER, LOTTO.END_NUMBER);
    });
    this.#validateNoDuplicates(numbers);
    this.#validateExactCount(numbers, LOTTO.COUNT);
  }
}

export default Validator;
