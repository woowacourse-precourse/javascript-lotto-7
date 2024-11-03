import { LOTTO_NUMBER_LENGTH, LOTTO_NUMBER_RANGE } from '../Constants.js';

class LottoValidator {
  /** @param {number[]} numbers */
  static isCorrectLength({ length }) {
    return length === LOTTO_NUMBER_LENGTH;
  }

  /** @param {number[]} numbers */
  static isInRangeAll(numbers) {
    return numbers.every(LottoValidator.isInRange);
  }

  /** @param {number} n */
  static isInRange(n) {
    const [MIN, MAX] = LOTTO_NUMBER_RANGE;

    return MIN <= n && n <= MAX;
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
