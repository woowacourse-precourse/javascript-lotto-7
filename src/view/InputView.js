import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';

class InputView {
  async askPurchasePrice() {
    await Console.readLineAsync(MESSAGE.USER_COST_PROMPT);
  }
}
export default InputView;
