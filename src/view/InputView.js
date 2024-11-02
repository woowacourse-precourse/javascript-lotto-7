import { readAsyncInput } from '../utils/inputUtils.js';
import { LOG_MESSAGE } from '../constants/message.js';

const InputView = {
  getPurchaseAmount() {
    return readAsyncInput(LOG_MESSAGE.START_MESSAGE);
  },
}

export default InputView;