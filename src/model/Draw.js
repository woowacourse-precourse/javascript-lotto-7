import {
  BONUS_NUMBER_MESSAGE,
  START_ERROR,
  WINNING_NUMBER_MESSAGE,
} from "../constant/constant.js";

class Draw {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#validateWinningNumber(winningNumbers);
    this.#validateBonusNumber(bonusNumber, winningNumbers);
  }

  #validateWinningNumber(winningNumbers) {
    if (
      winningNumbers.some(
        (winningNumber) =>
          !winningNumber || isNaN(winningNumber) || winningNumber <= 0
      )
    ) {
      throw new Error(
        START_ERROR.START_ERROR_MESSAGE +
          " " +
          WINNING_NUMBER_MESSAGE.INVALID_WINNING_NUMBER
      );
    }
    if (winningNumbers.length !== 6) {
      throw new Error(
        START_ERROR.START_ERROR_MESSAGE +
          " " +
          WINNING_NUMBER_MESSAGE.NOT_SIX_NUMBER
      );
    }
    if (new Set(winningNumbers).size !== winningNumbers.length) {
      throw new Error(
        START_ERROR.START_ERROR_MESSAGE +
          " " +
          WINNING_NUMBER_MESSAGE.NOT_SAME_NUMBER
      );
    }
    if (
      winningNumbers.some(
        (winningNumber) => winningNumber < 1 || winningNumber > 45
      )
    ) {
      throw new Error(
        START_ERROR.START_ERROR_MESSAGE +
          " " +
          WINNING_NUMBER_MESSAGE.NOT_RANGE_NUMBER
      );
    }
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    if (!bonusNumber || isNaN(bonusNumber) || bonusNumber <= 0) {
      throw new Error(
        START_ERROR.START_ERROR_MESSAGE +
          " " +
          BONUS_NUMBER_MESSAGE.INVALID_BONUS_NUMBER
      );
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(
        START_ERROR.START_ERROR_MESSAGE +
          " " +
          BONUS_NUMBER_MESSAGE.NOT_RANGE_NUMBER
      );
    }
    if (winningNumbers.includes(bonusNumber[0])) {
      throw new Error(
        START_ERROR.START_ERROR_MESSAGE +
          " " +
          BONUS_NUMBER_MESSAGE.WINNING_IN_BONUS
      );
    }
  }

  getWinningNumber() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Draw;
