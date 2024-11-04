import { NUMBER_RANGE, ERROR_MESSAGE } from './constant.js';

/**
 *
 */
class Validator {
  /**
   *
   */
  static validateAmount(amount) {
    this.#isAmountNumber(amount);
    this.#isAmountNegative(amount);
    this.#isAmountThousand(amount);
  }

  /**
   *
   */
  static validateWinningNumbers(winningNumbers) {
    this.#isWinningNumberRange(winningNumbers);
    this.#isWinningNumberDuplicate(winningNumbers);
  }

  /**
   *
   */
  static validateWinningBonusNumber(winningNumbers, winningBonusNumber) {
    this.#isWinningBonusNumberInteger(winningNumbers, winningBonusNumber);
  }

  /**
   *
   */
  static #isAmountNumber(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR_MESSAGE.AMOUNT_NOT_NUMBER);
    }
  }

  /**
   *
   */
  static #isAmountNegative(amount) {
    if (amount < 0) {
      throw new Error(ERROR_MESSAGE.AMOUNT_NEGATIVE);
    }
  }

  /**
   *
   */
  static #isAmountThousand(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.AMOUNT_NOT_THOUSAND);
    }
  }

  /**
   *
   */
  static #isWinningNumberRange(winningNumbers) {
    if (
      winningNumbers.some((number) =>
        [!Number.isInteger(number), number < NUMBER_RANGE.MIN, number > NUMBER_RANGE.MAX].some(
          Boolean
        )
      )
    ) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_INVALID_RANGE);
    }
  }

  /**
   *
   */
  static #isWinningNumberDuplicate(winningNumbers) {
    if (new Set(winningNumbers).size !== winningNumbers.length) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE);
    }
  }

  /**
   *
   */
  static #isWinningBonusNumberInteger(winningNumbers, winningBonusNumber) {
    if (!Number.isInteger(winningBonusNumber)) {
      throw new Error(ERROR_MESSAGE.WINNING_BONUS_NUMBER_NOT_INTEGER);
    }
  }
}

export default Validator;
