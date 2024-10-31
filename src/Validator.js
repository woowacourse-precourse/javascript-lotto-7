import ERROR_MESSAGE from './constants/errorMessage.js';
import { LOTTO_BOUNDARY } from './constants/magicNumber.js';

class Validator {
  static validateLottoNumber(number) {
    this.#validateNumberEmpty(number);
    this.#validateNumberContainString(number);
    this.#validateNumberInBoundary(number);
  }

  static #validateNumberEmpty(number) {
    if (number === '' || number === null) {
      throw new Error(ERROR_MESSAGE.EMPTY_NUMBER);
    }
  }

  static #validateNumberContainString(number) {
    if (Number.isNaN(Number(number)) === true) {
      throw new Error(ERROR_MESSAGE.CONTAIN_STRING);
    }
  }

  static #validateNumberInBoundary(number) {
    if (number < LOTTO_BOUNDARY.MIN || number > LOTTO_BOUNDARY.MAX) {
      throw new Error(ERROR_MESSAGE.NOT_BETWEEN_1_TO_45_NUMBER);
    }
  }
}

export default Validator;
