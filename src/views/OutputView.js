import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/consoleMessage';

class OutputView {
  printPurchasedLotto(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const sortedNumbers = lotto.getNumbers().sort((a, b) => a - b);
      Console.print(`[${sortedNumbers.join(', ')}]`);
    });
  }

  printWinningStatistics(matchCounts, earningsRatio) {
    Console.print(MESSAGES.WINNING_STATISTICS_TITLe);
    Console.print(MESSAGES.WINNING_STATISTICS_SEPARATOR);
    Console.print(MESSAGES.MATCH_COUNT_FIFTH_PRIZE(matchCounts[3]));
    Console.print(MESSAGES.MATCH_COUNT_FOURTH_PRIZE(matchCounts[4]));
    Console.print(MESSAGES.MATCH_COUNT_THIRD_PRIZE(matchCounts[5]));
    Console.print(MESSAGES.MATCH_COUNT_SECOND_PRIZE(matchCounts.bonus));
    Console.print(MESSAGES.MATCH_COUNT_FIRST_PRIZE(matchCounts[6]));
    Console.print(MESSAGES.TOTAL_EARNINGS_RATIO(earningsRatio));
  }
}

export default OutputView;
