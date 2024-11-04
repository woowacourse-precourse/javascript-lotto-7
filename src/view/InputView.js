import { readAsyncInput } from '../utils/console.js';
import { LOG_MESSAGE } from '../constants/message.js';

const InputView = {
  getPurchaseAmount() {
    return readAsyncInput(LOG_MESSAGE.ENTER_PURCHASE_AMOUNT);
  },

  getWinningNumbers() {
    return readAsyncInput(LOG_MESSAGE.ENTER_WINNING_NUMBERS);
  },

  getBonusNumber() {
    return readAsyncInput(LOG_MESSAGE.ENTER_BONUS_NUMBER);
  },
}

export default InputView;