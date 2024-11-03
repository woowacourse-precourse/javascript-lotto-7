//@ts-check

import { GAME_MESSAGE } from '../constants/gameMessage.js';
import User from '../User/User.js';
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
      try {
        return await this.processWinningNumbers();
      } catch (error) {
        outputView.printErrorMessage(error);
      }
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
      try {
        const input = await this.user.readUserInput(GAME_MESSAGE.BONUS_NUMBER);
        validateBonusNumber(input, winningNumbers);
        return input;
      } catch (error) {
        outputView.printErrorMessage(error);
      }
    }
  }
}

export default WinningNumberController;
