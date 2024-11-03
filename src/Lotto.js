import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.WRONG_LENGTH);
    }

    numbers.forEach(number => {
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGE.WINNING_NUMBER.IS_NOT_NUMBER);
      }
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.WINNING_NUMBER.WRONG_RANGE);
      }
    });

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.DUPLICATE);
    }
  }

  #validateBonusNumber(numbers) {
    if (isNaN(numbers)) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.IS_NOT_NUMBER);
    }
    if (numbers < 1 || numbers > 45) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER.WRONG_RANGE);
    }
  }

  #matchLotto(numbers, winningNumber) {
    let matchCount = 0;

    winningNumber.map(winningNumber => {
      if (numbers?.includes(winningNumber)) {
        matchCount++;
      }
    });
    return matchCount;
  }

  #matchBonusNumber(numbers, bonusNumber) {
    let isMatch = false;
    if (numbers?.includes(bonusNumber)) {
      isMatch = true;
    }
    return isMatch;
  }

  validateWinningNumber(numbers) {
    return this.#validate(numbers);
  }

  validateBonusNumber(bonusNumber) {
    return this.#validateBonusNumber(bonusNumber);
  }

  getMatchCount(numbers, winningNumber, bonusNumber) {
    return {
      matchCount: this.#matchLotto(numbers, winningNumber),
      isMatchBonusNumber: this.#matchBonusNumber(numbers, bonusNumber),
    };
  }
}

export default Lotto;
