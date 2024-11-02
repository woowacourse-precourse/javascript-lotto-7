import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/consoleMessage';
import {
  BONUS_MATCH_COUNT,
  MATCH_COUNT_FIFTH_PRIZE,
  MATCH_COUNT_FIRST_PRIZE,
  MATCH_COUNT_FOURTH_PRIZE,
  MATCH_COUNT_SECOND_PRIZE,
} from '../constants/constraints';

class OutputView {
  printPurchasedLotto(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const sortedNumbers = lotto.getNumbers().sort((a, b) => a - b);
      Console.print(`[${sortedNumbers.join(', ')}]`);
    });
  }

  printWinningStatistics(matchCounts, earningsRatio) {
    Console.print(MESSAGES.WINNING_STATISTICS_TITLE);
    Console.print(MESSAGES.WINNING_STATISTICS_SEPARATOR);
    Console.print(
      MESSAGES.MATCH_COUNT_FIFTH_PRIZE(matchCounts[MATCH_COUNT_FIFTH_PRIZE]),
    );
    Console.print(
      MESSAGES.MATCH_COUNT_FOURTH_PRIZE(matchCounts[MATCH_COUNT_FOURTH_PRIZE]),
    );
    Console.print(
      MESSAGES.MATCH_COUNT_THIRD_PRIZE(matchCounts[MATCH_COUNT_SECOND_PRIZE]),
    );
    Console.print(
      MESSAGES.MATCH_COUNT_SECOND_PRIZE(matchCounts[BONUS_MATCH_COUNT]),
    );
    Console.print(
      MESSAGES.MATCH_COUNT_FIRST_PRIZE(matchCounts[MATCH_COUNT_FIRST_PRIZE]),
    );
    Console.print(MESSAGES.TOTAL_EARNINGS_RATIO(earningsRatio));
  }
}

export default OutputView;
