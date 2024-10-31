import ERROR_MESSAGE from './constants/errorMessage.js';

const LOTTO_BOUNDARY = Object.freeze({ MIN: 1, MAX: 45 });

class Validator {
  static validateLottoNumber(number) {
    this.#validateNumberEmpty(number);
    this.#validateNumberType(number);
    this.#validateNumberInBoundary(number);
  }

  static #validateNumberEmpty(number) {
    if (number === '' || number === null) {
      throw new Error(ERROR_MESSAGE.EMPTY_NUMBER);
    }
  }

  static #validateNumberType(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(ERROR_MESSAGE.CONTAIN_STRING);
    }

    if (Number.isInteger(Number(number)) === false) {
      throw new Error(ERROR_MESSAGE.CONTAIN_FLOAT);
    }
  }

  static #validateNumberInBoundary(number) {
    if (number < LOTTO_BOUNDARY.MIN || number > LOTTO_BOUNDARY.MAX) {
      throw new Error(ERROR_MESSAGE.NOT_BETWEEN_1_TO_45_NUMBER);
    }
  }
}

export default Validator;
