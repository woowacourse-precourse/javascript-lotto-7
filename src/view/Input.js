import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';

class Input {
  static async requestMoney() {
    const input = await Console.readLineAsync(
      `${LOTTO_MESSAGE.REQUEST_PURCHASE_AMOUNT}\n`,
    );
    return input;
  }
}

export default Input;
