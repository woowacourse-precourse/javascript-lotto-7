import { WINNING_NUMBER_MESSAGE } from "../constant/constant.js";

class Draw {
  #winningNUmbers;
  #bonusNumber;

  constructor(winningNUmbers, bonusNumber) {
    this.#winningNUmbers = winningNUmbers;
    this.#bonusNumber = bonusNumber;
    this.#validateWinningNumber(winningNUmbers);
    this.#validateBonusNumber(bonusNumber);
  }

  #validateWinningNumber(winningNumbers) {
    if (
      winningNumbers.some(
        (winningNumber) =>
          !winningNumber || isNaN(winningNumber) || winningNumber <= 0
      )
    ) {
      throw new Error(WINNING_NUMBER_MESSAGE.INVALID_WINNING_NUMBER);
    }
    if (winningNumbers.length !== 6) {
      throw new Error(WINNING_NUMBER_MESSAGE.NOT_SIX_NUMBER);
    }
    if (new Set(winningNumbers).size !== winningNumbers.length) {
      throw new Error(WINNING_NUMBER_MESSAGE.NOT_SAME_NUMBER);
    }
    if (
      winningNumbers.some(
        (winningNumber) => winningNumber < 1 || winningNumber > 45
      )
    ) {
      throw new Error(WINNING_NUMBER_MESSAGE.NOT_RANGE_NUMBER);
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (!bonusNumber || isNaN(bonusNumber) || bonusNumber <= 0) {
      throw new Error(BONUS_NUMBER_MESSAGE.INVALID_WINNING_NUMBER);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(BONUS_NUMBER_MESSAGE.NOT_RANGE_NUMBER);
    }
  }

  getWinningNumber() {
    return this.#winningNUmbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Draw;
