import { LOTTO_NUMBER_LENGTH } from '../Constants.js';

class LottoValidator {
  /** @param {number[]} numbers */
  static isCorrectLength({ length }) {
    return length === LOTTO_NUMBER_LENGTH;
  }
}

export default LottoValidator;
