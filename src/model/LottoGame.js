import { Exception } from '../Utils.js';
import LottoValidator from './LottoValidator.js';

class LottoGame {
  /** @type {number[]} */
  #winningNumbers;

  /** @param {number[]} winningNumbers */
  constructor(winningNumbers) {
    LottoGame.validateWinningNumbers(winningNumbers);
  }

  /** @param {number[]} numbers */
  static validateWinningNumbers(numbers) {
    LottoGame.#validateWinningNumbersType(numbers);
  }

  /** @param {number[]} numbers */
  static #validateWinningNumbersType(numbers) {
    if (!LottoValidator.isSafeNumberAll(numbers)) {
      throw new Exception('유효하지 않은 당첨 번호입니다.');
    }
  }
}

export default LottoGame;
