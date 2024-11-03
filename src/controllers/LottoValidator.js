import { LOTTO, ERROR_MESSAGES } from '../utils/constants.js';

class LottoValidator {
  #winningNumbers;

  constructor(winningNumbers) {
    this.#winningNumbers = this.#validateWinningNumber(winningNumbers);
  }

  validateBonusNumber(bonusNumber) {
    const validateBonusNumber = this.#validateBonusNumber(bonusNumber);

    if (this.#winningNumbers.includes(validateBonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }

    return {
      winningNumbers: this.#winningNumbers,
      bonusNumber: validateBonusNumber,
    };
  }

  #validateWinningNumber(userInput) {
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
    return arr.some((e) => e.isNaN());
  }

  #isAllInRange(arr) {
    return arr.some((e) => e >= range.MIN && e <= range.MAX);
  }

  #validateBonusNumber(bonusNumber) {
    const [parsed] = this.#parseUserInput(bonusNumber);
    return parsed;
  }
}

export default LottoValidator;
