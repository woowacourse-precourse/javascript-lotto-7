import { printMessage } from '../utils/console.js';
import { LOG_MESSAGE } from '../constants/message.js';

const OutputView = {
  printPurchaseMessage(lottoCount) {
    printMessage(`${lottoCount}${LOG_MESSAGE.PURCHASE_CONFIRMATION}`);
  },
};

export default OutputView;