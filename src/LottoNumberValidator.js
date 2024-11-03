import ERROR_MESSAGE from './constants/errorMessage.js';
import { LOTTO_BOUNDARY } from './constants/lottoStandard.js';
import CustomError from './CustomError.js';

class LottoNumberValidator {
  static validateLottoNumber(number) {
    this.#validateNumberEmpty(number);
    this.#validateNumberType(number);
    this.#validateNumberInBoundary(number);
  }

  static #validateNumberEmpty(number) {
    if (number === '' || number === null) {
      throw new CustomError(ERROR_MESSAGE.EMPTY_NUMBER);
    }
  }

  static #validateNumberType(number) {
    if (Number.isNaN(Number(number))) {
      throw new CustomError(ERROR_MESSAGE.CONTAIN_STRING);
    }

    if (Number.isInteger(Number(number)) === false) {
      throw new CustomError(ERROR_MESSAGE.CONTAIN_FLOAT);
    }
  }

  static #validateNumberInBoundary(number) {
    if (number < LOTTO_BOUNDARY.MIN || number > LOTTO_BOUNDARY.MAX) {
      throw new CustomError(ERROR_MESSAGE.NOT_BETWEEN_1_TO_45_NUMBER);
    }
  }
}

export default LottoNumberValidator;
