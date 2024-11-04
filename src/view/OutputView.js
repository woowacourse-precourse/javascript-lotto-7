import { Console } from '@woowacourse/mission-utils';
import { ERROR_PREFIX, INPUT_MESSAGE } from '../constant/constants.js';
import { PRIZE_BY_MATCH_COUNT } from '../constant/prizeByMatchCount.js';

export default class OutputView {
  printError(message) {
    Console.print(`${ERROR_PREFIX} ${message}`);
  }

  printWinningStatistics(lottoResult) {
    Console.print(INPUT_MESSAGE.RESULT);
    const StatisticsString = this.#getStatisticsString(lottoResult.getResult());
    Console.print(StatisticsString);
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  #getStatisticsString(result) {
    const matchSummary = [];
    for (let key in result) {
      if (key === '2') {
        matchSummary.push(
          `${PRIZE_BY_MATCH_COUNT[key].MATCH_COUNT}개 일치, 보너스 볼 일치 (${PRIZE_BY_MATCH_COUNT[key].MONEY_STRING}원) - ${result[key]}개`,
        );
        continue;
      }
      matchSummary.push(
        `${PRIZE_BY_MATCH_COUNT[key].MATCH_COUNT}개 일치 (${PRIZE_BY_MATCH_COUNT[key].MONEY_STRING}원) - ${result[key]}개`,
      );
    }
    return matchSummary.reverse().join('\n');
  }

  printLottoPurchaseHistory(lottos) {
    const result = lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    Console.print(result);
  }
}
