import { printMessage } from '../utils/console.js';
import { LOG_MESSAGE } from '../constants/message.js';
import { PRIZE_CRITERIA } from '../constants/gameRule.js';

const OutputView = {
  printPurchaseMessage(lottoCount) {
    printMessage(`${lottoCount}${LOG_MESSAGE.PURCHASE_CONFIRMATION}`);
  },

  printLottoNumbers(lottoNumbers) {
    printMessage(lottoNumbers.map(numbers => `[${numbers.join(', ')}]`).join('\n'));
  },

  printWinningStatistics(statistics) {
    const resultMessage = Object.values(PRIZE_CRITERIA).map(({ rank, prize, description }) => {
      const count = statistics[rank]?.count || 0;
      return `${description} (${prize.toLocaleString()}원) - ${count}개`;
    }).join('\n');

    printMessage(`당첨 통계\n---\n${resultMessage}`);
  },
};

export default OutputView;