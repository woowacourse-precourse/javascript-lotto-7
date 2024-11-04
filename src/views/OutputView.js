import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/consoleMessage.js';
import { MATCH_COUNTS_BY_RANK } from '../constants/constraints.js';

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
    [
      [MATCH_COUNTS_BY_RANK.FIFTH, OUTPUT.MATCH_COUNT_FIFTH_PRIZE],
      [MATCH_COUNTS_BY_RANK.FOURTH, OUTPUT.MATCH_COUNT_FOURTH_PRIZE],
      [MATCH_COUNTS_BY_RANK.THIRD, OUTPUT.MATCH_COUNT_THIRD_PRIZE],
      [MATCH_COUNTS_BY_RANK.SECOND, OUTPUT.MATCH_COUNT_SECOND_PRIZE],
      [MATCH_COUNTS_BY_RANK.FIRST, OUTPUT.MATCH_COUNT_FIRST_PRIZE],
    ].forEach(([rank, outputFunc]) =>
      Console.print(outputFunc(matchCounts[rank])),
    );
    Console.print(OUTPUT.TOTAL_EARNINGS_RATIO(earningsRatio));
  }
}

export default OutputView;
