import { LOTTO_ERRORS } from '../constants/constants.js';

class LottoNumberValidator {
  static validateLottoNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(LOTTO_ERRORS.LOTTO_INVALID_NUMBER_RANGE);
    }
  }
}

export default LottoNumberValidator;
