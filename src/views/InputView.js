import { INPUT_MESSAGES } from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getPurchaseAmount() {
    return Console.readLineAsync(INPUT_MESSAGES.purchase_amount);
  }
}

export default InputView;
