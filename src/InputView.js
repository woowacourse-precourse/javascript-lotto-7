import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants/Messages.js';

const inputView = {
  async readAmount() {
    const amount = await Console.readLineAsync(MESSAGES.readAmount);
    return amount;
  },
};

export default inputView;
