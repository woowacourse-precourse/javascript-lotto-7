import { printMessage } from '../utils/console.js';
import { LOG_MESSAGE } from '../constants/message.js';

const OutputView = {
  printPurchaseMessage(lottoCount) {
    printMessage(`${lottoCount}${LOG_MESSAGE.LOTTO_COUNT_MESSAGE}`);
  },
};

export default OutputView;