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

  purchaseAmount(value) {
    this.#validateNaturalNumber(value);
    this.#validateThousandUnit(value);
  }

  winningNumbers(values) {
    values.forEach((value) => {
      this.#validateNaturalNumber(value);
      this.#validateRange(value, LOTTO.START_NUMBER, LOTTO.END_NUMBER);
    });
  }
}

export default Validator;
