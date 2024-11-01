import { ERROR_MESSAGE } from './constant/errorMessage.js';
import {
  NUMBER_RANGE,
  PRICE_RANGE,
  LOTTO_NUMBER_LENGTH,
} from './constant/system.js';

export default class Validator {
  static price(price) {
    this.#checkNumberPrice(price);
    this.#checkMinPrice(price);
    this.#checkMaxPrice(price);
    this.#checkUnitPrice(price);
  }

  static winningNumbers(winningNumbers) {
    this.#checkLengthWinningNumbers(winningNumbers);
    this.#checkIntegerWinningNumbers(winningNumbers);
    this.#checkDuplicateWinningNumbers(winningNumbers);
    this.#checkRangeWinningNumbers(winningNumbers);
  }

  static bonusNumber(winningNumbers, bonusNumber) {
    this.#checkIntegerBonusNumber(bonusNumber);
    this.#checkRangeBonusNumber(bonusNumber);
    this.#checkDuplicateBonusNumber(winningNumbers, bonusNumber);
  }

  // 입력 금액 검증
  static #checkNumberPrice(number) {
    if (!this.#isInteger(number)) this.#throwError(ERROR_MESSAGE.NUMBER_PRICE);
  }

  static #checkMinPrice(number) {
    if (number < PRICE_RANGE.MIN) this.#throwError(ERROR_MESSAGE.MIN_PRICE);
  }

  static #checkMaxPrice(number) {
    if (number > PRICE_RANGE.MAX) this.#throwError(ERROR_MESSAGE.MAX_PRICE);
  }

  static #checkUnitPrice(number) {
    if (number % PRICE_RANGE.MIN !== 0)
      this.#throwError(ERROR_MESSAGE.UNIT_PRICE);
  }

  // 당첨 번호 검증
  static #checkLengthWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== LOTTO_NUMBER_LENGTH)
      this.#throwError(ERROR_MESSAGE.LENGTH_WINNING_NUMBERS);
  }

  static #checkDuplicateWinningNumbers(winningNumbers) {
    if (new Set(winningNumbers).size !== LOTTO_NUMBER_LENGTH)
      this.#throwError(ERROR_MESSAGE.DUPLICATE_WINNIG_NUMBERS);
  }

  static #checkIntegerWinningNumbers(winningNumbers) {
    winningNumbers.forEach((winningNumber) => {
      if (!this.#isInteger(winningNumber))
        this.#throwError(ERROR_MESSAGE.INTEGER_WINNING_NUMBERS);
    });
  }

  static #checkRangeWinningNumbers(winningNumbers) {
    winningNumbers.forEach((winningNumber) => {
      if (!this.#isInRange(winningNumber))
        this.#throwError(ERROR_MESSAGE.RANGE_WINNING_NUMBERS);
    });
  }

  // 보너스 번호 검증
  static #checkIntegerBonusNumber(bonusNumber) {
    if (!this.#isInteger(bonusNumber))
      this.#throwError(ERROR_MESSAGE.INTEGER_BONUS_NUMBER);
  }

  static #checkRangeBonusNumber(bonusNumber) {
    if (!this.#isInRange(bonusNumber))
      this.#throwError(ERROR_MESSAGE.RANGE_BONUS_NUMBER);
  }

  static #checkDuplicateBonusNumber(winningNumbers, bonusNumber) {
    if (
      new Set([...winningNumbers, bonusNumber]).size !==
      LOTTO_NUMBER_LENGTH + 1
    )
      this.#throwError(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
  }

  // 유틸리티 메서드
  static #throwError(errorMessage) {
    throw new Error(errorMessage);
  }

  static #isInteger(number) {
    return Number.isInteger(number);
  }

  static #isInRange(number) {
    return number >= NUMBER_RANGE.MIN && number <= NUMBER_RANGE.MAX;
  }
}
