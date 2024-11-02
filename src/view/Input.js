import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';

class Input {
  static async requestMoney() {
    const input = await Console.readLineAsync(
      `${LOTTO_MESSAGE.REQUEST_PURCHASE_AMOUNT}\n`,
    );
    return input;
  }

  static async requestWinningNumbers() {
    const input = await Console.readLineAsync(
      `${LOTTO_MESSAGE.REQUEST_WINNING_NUMBERS}\n`,
    );
    return input;
  }

  static async requestBonusNumber() {
    const input = await Console.readLineAsync(
      `\n${LOTTO_MESSAGE.REQUEST_BONUS_NUMBER}\n`,
    );
    return input;
  }
}

export default Input;
