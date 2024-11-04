import { LOTTO, ERROR_MESSAGES } from '../utils/constants.js';

class LottoValidator {
  validateBonusNumber(winningNumbers, bonusNumber) {
    const validateBonusNumber = this.#validateBonusNumber(bonusNumber);

    if (winningNumbers.includes(validateBonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }

    return validateBonusNumber;
  }

  validateWinningNumber(userInput) {
    const parsedNumbers = this.#parseUserInput(userInput);

    if (!this.#isCorrectCount(parsedNumbers)) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    }

    if (this.#hasDuplicateNumbers(parsedNumbers)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }

    return parsedNumbers;
  }

  #isCorrectCount(arr) {
    return arr.length === LOTTO.WINNING_NUMBERS_COUNT;
  }

  #hasDuplicateNumbers(arr) {
    return new Set(arr).size !== arr.length;
  }

  #parseUserInput(userInput) {
    const parsedNumbers = userInput
      .split(LOTTO.SEPARATOR)
      .map((e) => Number(e.trim()));

    if (this.#hasNonNumericValue(parsedNumbers)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_VALUE);
    }

    if (!this.#isAllInRange(parsedNumbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }

    return parsedNumbers;
  }

  #hasNonNumericValue(arr) {
    return arr.some((e) => Number.isNaN(e));
  }

  #isAllInRange(arr) {
    return arr.every(
      (e) => e >= LOTTO.NUMBER_RANGE.MIN && e <= LOTTO.NUMBER_RANGE.MAX
    );
  }

  #validateBonusNumber(bonusNumber) {
    const [parsed] = this.#parseUserInput(bonusNumber);
    return parsed;
  }
}

export default new LottoValidator();
