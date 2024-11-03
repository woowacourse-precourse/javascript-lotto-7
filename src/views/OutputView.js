import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/consoleMessage.js';
import {
  MATCH_COUNTS_BY_RANK,
  PRIZE_MATCH_COUNTS,
} from '../constants/constraints.js';

class OutputView {
  printPurchasedLotto(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const sortedNumbers = lotto.getNumbers().sort((a, b) => a - b);
      Console.print(`[${sortedNumbers.join(', ')}]`);
    });
  }

  printWinningStatistics(matchCounts, earningsRatio) {
    Console.print(OUTPUT.WINNING_STATISTICS_TITLE);
    Console.print(OUTPUT.WINNING_STATISTICS_SEPARATOR);
    Console.print(
      OUTPUT.MATCH_COUNT_FIFTH_PRIZE(matchCounts[MATCH_COUNTS_BY_RANK.FIFTH]),
    );
    Console.print(
      OUTPUT.MATCH_COUNT_FOURTH_PRIZE(matchCounts[MATCH_COUNTS_BY_RANK.FOURTH]),
    );
    Console.print(
      OUTPUT.MATCH_COUNT_THIRD_PRIZE(matchCounts[MATCH_COUNTS_BY_RANK.THIRD]),
    );
    Console.print(
      OUTPUT.MATCH_COUNT_SECOND_PRIZE(matchCounts[MATCH_COUNTS_BY_RANK.SECOND]),
    );
    Console.print(
      OUTPUT.MATCH_COUNT_FIRST_PRIZE(matchCounts[MATCH_COUNTS_BY_RANK.FIRST]),
    );
    Console.print(OUTPUT.TOTAL_EARNINGS_RATIO(earningsRatio));
  }
}

export default OutputView;
