import { LOTTO_NUMBER_LENGTH } from '../Constants.js';

class LottoValidator {
  /** @param {number[]} numbers */
  static isCorrectLength({ length }) {
    return length === LOTTO_NUMBER_LENGTH;
  }

  /** @param {number[]} numbers */
  static isSafeNumberAll(numbers) {
    return numbers.every(LottoValidator.isSafeNumber);
  }

  /** @param {number} n */
  static isSafeNumber(n) {
    return !Number.isNaN(n) && Number.isSafeInteger(n);
  }
}

export default LottoValidator;
