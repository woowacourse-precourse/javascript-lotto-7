import { INPUT_MSG } from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  async getPurchaseAmount() {
    return Console.readLineAsync(INPUT_MSG.purchaseAmount);
  }
}
