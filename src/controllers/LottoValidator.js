import { LOTTO, ERROR_MESSAGES } from '../utils/constants.js';

class LottoValidator {
  validateBonusNumber(winningNumbers, bonusNumber) {
    const validateBonusNumber = this.#validateBonusNumber(bonusNumber);

    if (winningNumbers.includes(validateBonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }

    return {
      winningNumbers: winningNumbers,
      bonusNumber: validateBonusNumber,
    };
  }

  validateWinningNumber(userInput) {
    return this.#parseUserInput(userInput);
  }

  #parseUserInput(userInput) {
    const parsedNumbers = userInput
      .split(LOTTO.SEPARATOR)
      .map((e) => Number(e.trim()));

    if (this.#hasNonNumericValue(parsedNumbers)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
    }

    if (this.#isAllInRange(parsedNumbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }

    return parsedNumbers;
  }

  #hasNonNumericValue(arr) {
    return arr.some((e) => Number.isNaN(e));
  }

  #isAllInRange(arr) {
    return arr.some((e) => e >= range.MIN && e <= range.MAX);
  }

  #validateBonusNumber(bonusNumber) {
    const [parsed] = this.#parseUserInput(bonusNumber);
    return parsed;
  }
}

export default new LottoValidator();
