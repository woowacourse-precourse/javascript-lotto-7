import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';

export class Input {
  async inputMoney() {
    const money = await Console.readLineAsync(MESSAGE.inputAmount);
    return Number(money);
  }

  async inputWinningNumber() {
    const winnginNumber = await Console.readLineAsync(
      MESSAGE.inputWinningNumber,
    );

    return winnginNumber.split(',');
  }
}
