import { MissionUtils } from '@woowacourse/mission-utils';
import { PRIZE } from '../constants/LOTTO_CONSTANTS.js';

class OutputView {
  static printErrorMessage(message) {
    MissionUtils.Console.print(message);
  }

  static printTicketCount(count) {
    MissionUtils.Console.print(`\n${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottoNumbers) {
    lottoNumbers.forEach((array) => {
      const sortArray = array.sort((a, b) => a - b);
      MissionUtils.Console.print(`[${sortArray.join(', ')}]`);
    });
  }

  static printLottoStatistics(rankCounts) {
    const ranks = ['fifth', 'fourth', 'third', 'second', 'first'];
    MissionUtils.Console.print('\n당첨 통계\n---');
    ranks.forEach((rank, i) => {
      const prize = Object.values(PRIZE)[i];
      let message = `${
        prize.MATCHED_COUNT
      }개 일치 (${prize.PRIZE_AMOUNT.toLocaleString()}원) - ${
        rankCounts[rank]
      }개`;

      if (rank === 'second') {
        message = `${
          prize.MATCHED_COUNT
        }개 일치, 보너스 볼 일치 (${prize.PRIZE_AMOUNT.toLocaleString()}원) - ${
          rankCounts[rank]
        }개`;
      }

      MissionUtils.Console.print(message);
    });
  }

  static printProfitRate(profitRate) {
    const formattedProfitRate = Number(profitRate.toFixed(1)).toLocaleString();
    MissionUtils.Console.print(`총 수익률은 ${formattedProfitRate}%입니다.`);
  }
}

export default OutputView;
