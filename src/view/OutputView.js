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
    const resultMessage = PRIZE_CRITERIA.map(({ rank, matchCount, prize, isBonusMatched }) => {
      const count = statistics[rank]?.count || 0;
      let bonusText = '';
      if (isBonusMatched) bonusText = ', 보너스 볼 일치';
      return `${matchCount}개 일치 (${prize.toLocaleString()}원)${bonusText} - ${count}개`;
    }).join('\n');

    printMessage(`당첨 통계\n---\n${resultMessage}`);
  },
};

export default OutputView;