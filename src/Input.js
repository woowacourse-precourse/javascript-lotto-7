import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';

export class Input {
  async inputMoney() {
    const money = await Console.readLineAsync(MESSAGE.inputAmount);
    return Number(money);
  }
}
