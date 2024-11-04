import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/Constants.js';

export default class Input {
  static async getAmount() {
    const amount = await Console.readLineAsync(MESSAGE.INPUT.GET_AMOUNT);
    return amount;
  }

  static async getLottoWinningNumbers() {
    const winningNumber = await Console.readLineAsync(MESSAGE.INPUT.GET_WINNING_NUMBER);
    return winningNumber.split(',').map(Number);
  }

  static async getLottoBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.INPUT.GET_BONUS_NUMBER);
    return bonusNumber.split(',').map(Number);
  }
}
