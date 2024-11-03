import { ERROR_MESSAGE } from './constant/error';

class Validator {
  #validateNaturalNumber(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
    }
  }

  purchaseAmount(value) {
    this.#validateNaturalNumber(value);
  }
}

export default Validator;
