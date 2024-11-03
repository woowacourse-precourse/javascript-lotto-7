import { printMessage } from '../utils/console.js';
import { LOG_MESSAGE } from '../constants/message.js';

const OutputView = {
  printPurchaseMessage(lottoCount) {
    printMessage(`${lottoCount}${LOG_MESSAGE.PURCHASE_CONFIRMATION}`);
  },

  printLottoNumbers(lottoNumbers) {
    printMessage(lottoNumbers.map(numbers => `[${numbers.join(', ')}]`).join('\n'));
  },
};

export default OutputView;