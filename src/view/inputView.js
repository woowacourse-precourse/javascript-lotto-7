import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const inputView = {
  async readPayment() {
    const input = await Console.readLineAsync(MESSAGES.payment);

    return input;
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync(MESSAGES.winningNumbers);

    return input;
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync(MESSAGES.bonusNumber);

    return input;
  },
};

export default inputView;
