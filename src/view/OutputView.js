import { printMessage, formatStatistics } from '../utils/console.js';
import { LOG_MESSAGE, STATISTICS, FORMAT } from '../constants/message.js';

const OutputView = {
  printPurchaseMessage(lottoCount) {
    printMessage(`${lottoCount}${LOG_MESSAGE.PURCHASE_CONFIRMATION}`);
  },

  printLottoNumbers(lottoNumbers) {
    printMessage(lottoNumbers.map(numbers => `[${numbers.join(', ')}]`).join(FORMAT.LINEBREAK));
  },

  printWinningStatistics(statistics) {
    const formattedStatistics = formatStatistics(statistics);
    printMessage(`${STATISTICS.HEADER}${formattedStatistics}`);
  },
  
  printRateOfReturn(rateOfReturn) {
    printMessage(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
};

export default OutputView;
