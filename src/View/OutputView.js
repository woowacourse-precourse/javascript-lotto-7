import { PRIZE_RANKS } from '../constants.js';
import { printOutput } from './utils/utils.js';

class OutputView {
  printLottoNumbers(lottoQuantity, lottos) {
    printOutput(`\n${lottoQuantity}개를 구매했습니다.`);

    lottos.map(lotto => {
      printOutput(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  printWinningStatistics(totalWinningRank) {
    printOutput('\n당첨 통계');
    printOutput('---');

    const prize = [
      PRIZE_RANKS.FIRST,
      PRIZE_RANKS.SECOND,
      PRIZE_RANKS.THIRD,
      PRIZE_RANKS.FOURTH,
      PRIZE_RANKS.FIFTH,
    ];

    for (let i = totalWinningRank.length - 1; i >= 0; i--) {
      const count = totalWinningRank[i];

      printOutput(`${prize[i].rank} (${prize[i].amount}원) - ${count}개`);
    }
  }

  printTotalReturnRate(totalReturnRate) {
    printOutput(`총 수익률은 ${totalReturnRate}%입니다.`);
  }
}

export default OutputView;
