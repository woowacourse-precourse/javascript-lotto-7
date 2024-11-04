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
    printMessage(LOG_MESSAGE.RATE_RETURN(rateOfReturn.toFixed(1)));
  }
};

export default OutputView;
