//@ts-check

import { GAME_MESSAGE } from '../constants/gameMessage.js';
import User from '../User/User.js';
import { tryCatch } from '../util/tryCatch.js';
import { validateBonusNumber } from '../validate/bonusNumberValidator.js';
import { validateWinningNumber } from '../validate/winningNumberValidator.js';
import { outputView } from '../views/outputView.js';

class WinningNumberController {
  /**@param {User} user  */
  constructor(user) {
    this.user = user;
  }

  async getWinningNumbers() {
    while (true) {
      const [error, winningNumbersData] = await tryCatch(
        this.processWinningNumbers()
      );

      if (error) {
        outputView.printErrorMessage(error);
        continue;
      }

      return winningNumbersData;
    }
  }

  async processWinningNumbers() {
    const winningNumber = await this.user.readUserInput(
      GAME_MESSAGE.WINNING_NUMBER
    );
    validateWinningNumber(winningNumber.split(',').map(Number));
    return winningNumber.split(',').map((num) => Number(num.trim()));
  }

  /**@param {number[]} winningNumbers */
  async getBonusNumber(winningNumbers) {
    while (true) {
      const [error, bonusNumberData] = await tryCatch(
        this.processBonusNumber(winningNumbers)
      );

      if (error) {
        outputView.printErrorMessage(error);
        continue;
      }

      return bonusNumberData;
    }
  }

  /**@param {number[]} winningNumbers */
  async processBonusNumber(winningNumbers) {
    const bonusNumber = await this.user.readUserInput(
      GAME_MESSAGE.BONUS_NUMBER
    );
    validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

export default WinningNumberController;
