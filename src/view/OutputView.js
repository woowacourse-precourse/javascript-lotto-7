import { printMessage } from '../utils/console.js';
import { LOG_MESSAGE, STATISTICS, FORMAT } from '../constants/message.js';
import { PRIZE_CRITERIA } from '../constants/gameRule.js';

const OutputView = {
  printPurchaseMessage(lottoCount) {
    printMessage(`${lottoCount}${LOG_MESSAGE.PURCHASE_CONFIRMATION}`);
  },

  printLottoNumbers(lottoNumbers) {
    printMessage(lottoNumbers.map(numbers => `[${numbers.join(', ')}]`).join(FORMAT.LINEBREAK));
  },

  printWinningStatistics(statistics) {
    printMessage(
      `${STATISTICS.HEADER}${Object.values(PRIZE_CRITERIA)
        .map(({ rank, description }) => STATISTICS.STATISTICSMESSAGE(description, statistics[rank].count))
        .join(FORMAT.LINEBREAK)}`
    );
  },
  
  printRateOfReturn(rateOfReturn) {
    printMessage(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
};

export default OutputView;