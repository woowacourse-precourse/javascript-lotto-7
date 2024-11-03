import { readAsyncInput } from '../utils/console.js';
import { LOG_MESSAGE } from '../constants/message.js';

const InputView = {
  getPurchaseAmount() {
    return readAsyncInput(LOG_MESSAGE.ENTER_PURCHASE_AMOUNT);
  },
}

export default InputView;