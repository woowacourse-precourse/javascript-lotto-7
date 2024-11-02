import { LOTTO, ERROR_MESSAGES } from '../utils/constants.js';

class LottoValidator {
  static validateWinningNumber(numbers) {
    const parsedNumbers = this.#validateSixNumbers(numbers);
    this.#validateAllNumeric(parsedNumbers);
    this.#validateAllInRange(parsedNumbers);

    return parsedNumbers;
  }

  static validateBonusNumber(winningNumbers, bonusNumber) {
    this.#validateIsNumeric(bonusNumber);
    this.#validateInRange(bonusNumber);
    this.#validateBonusNumberUniqueness(winningNumbers, bonusNumber);

    return Number(bonusNumber);
  }

  static #validateSixNumbers(numbers) {
    const parsedNumbers = numbers
      .split(LOTTO.SEPARATOR)
      .map((num) => Number(num.trim()));
    if (parsedNumbers.length !== LOTTO.WINNING_NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    }

    return parsedNumbers;
  }

  static #validateAllNumeric(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
      }
    });
  }

  static #validateAllInRange(numbers) {
    numbers.forEach((number) => {
      if (!this.#isInRange(number)) {
        throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
      }
    });
  }

  static #validateIsNumeric(bonusNumber) {
    if (Number.isNaN(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_BONUS);
    }
  }

  static #validateInRange(bonusNumber) {
    if (!this.#isInRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
  }

  static #validateBonusNumberUniqueness(winningNumbers, bonusNumber) {
    const parsedWinningNumbers = winningNumbers.map(Number);
    if (parsedWinningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }

  static #isInRange(number, range = LOTTO.NUMBER_RANGE) {
    return number >= range.MIN && number <= range.MAX;
  }
}

export default LottoValidator;
