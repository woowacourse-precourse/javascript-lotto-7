import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants/Messages.js';

const inputView = {
  async readAmount() {
    const amount = await Console.readLineAsync(MESSAGES.readAmount);
    return amount;
  },
  async readWinningNumber() {
    const winningNumber = await Console.readLineAsync(MESSAGES.readWinningNumbers);
    return winningNumber;
  },
  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGES.readBonusNumbers);
    return bonusNumber;
  },
};

export default inputView;
