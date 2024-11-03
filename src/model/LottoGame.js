import { Exception } from '../Utils.js';
import { LOTTO_NUMBER_LENGTH, LOTTO_NUMBER_RANGE } from '../Constants.js';
import LottoValidator from './LottoValidator.js';

class LottoGame {
  /** @type {number[]} */
  #winningNumbers;

  /** @type {number} */
  #bonusNumber;

  /**
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  constructor(winningNumbers, bonusNumber) {
    LottoGame.validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;
    LottoGame.validateBonusNumber(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  /** @param {number[]} numbers */
  static validateWinningNumbers(numbers) {
    LottoGame.#validateWinningNumbersType(numbers);
    LottoGame.#validateWinningNumbersLength(numbers);
    LottoGame.#validateWinningNumbersRange(numbers);
    LottoGame.#validateWinningNumbersDuplicated(numbers);
  }

  /** @param {number[]} numbers */
  static #validateWinningNumbersType(numbers) {
    if (!LottoValidator.isSafeNumberAll(numbers)) {
      throw new Exception('유효하지 않은 당첨 번호입니다.');
    }
  }

  /** @param {number[]} numbers */
  static #validateWinningNumbersLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_LENGTH) {
      throw new Exception(`당첨 번호는 ${LOTTO_NUMBER_LENGTH}개여야 합니다.`);
    }
  }

  /** @param {number[]} numbers */
  static #validateWinningNumbersRange(numbers) {
    const [MIN, MAX] = LOTTO_NUMBER_RANGE;

    if (!LottoValidator.isInRangeAll(numbers)) {
      throw new Exception(`당첨 번호는 ${MIN}에서 ${MAX}사이여야 합니다.`);
    }
  }

  /** @param {number[]} numbers */
  static #validateWinningNumbersDuplicated(numbers) {
    if (LottoValidator.isDuplicated(numbers)) {
      throw new Exception('당첨 번호는 중복될 수 없습니다.');
    }
  }

  /**
   * @param {number} bonusNumber
   * @param {number[]} winningNumbers
   */
  static validateBonusNumber(bonusNumber, winningNumbers) {
    LottoGame.#validateBonusNumberType(bonusNumber);
    LottoGame.#validateBonusNumberRange(bonusNumber);
    LottoGame.#validateBonusNumberInWinningNumbers(bonusNumber, winningNumbers);
  }

  /** @param {number} bonusNumber */
  static #validateBonusNumberType(bonusNumber) {
    if (!LottoValidator.isSafeNumber(bonusNumber)) {
      throw new Exception('유효하지 않은 보너스 번호입니다.');
    }
  }

  /** @param {number} n */
  static #validateBonusNumberRange(bonusNumber) {
    const [MIN, MAX] = LOTTO_NUMBER_RANGE;

    if (!LottoValidator.isInRange(bonusNumber)) {
      throw new Exception(`보너스 번호는 ${MIN}에서 ${MAX}사이여야 합니다.`);
    }
  }

  /**
   * @param {number} bonusNumber
   * @param {number[]} winningNumbers
   */
  static #validateBonusNumberInWinningNumbers(bonusNumber, winningNumbers) {
    const numbers = new Set(winningNumbers);

    if (numbers.has(bonusNumber)) {
      throw new Exception('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default LottoGame;
