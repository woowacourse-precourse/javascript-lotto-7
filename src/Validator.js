import { ERROR_MESSAGE } from './constant/error';

class Validator {
  #validateNaturalNumber(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
    }
  }

  #validThousandUnit(value) {
    if (value % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_THOUSAND_UNIT);
    }
  }

  purchaseAmount(value) {
    this.#validateNaturalNumber(value);
    this.#validThousandUnit(value);
  }

  winningNumbers(values) {
    values.forEach((value) => {
      this.#validateNaturalNumber(value);
    });
  }
}

export default Validator;
