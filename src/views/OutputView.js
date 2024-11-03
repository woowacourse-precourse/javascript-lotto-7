import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/viewMessages.js';

class OutputView {
  printLottos(amount, lottos) {
    const lottoCount = Math.floor(amount / 1000);
    Console.print(OUTPUT_MESSAGES.PURCHASE_RESULT(lottoCount));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  printMatchResults(statistics) {
    Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS);
    Console.print(OUTPUT_MESSAGES.MATCH_RESULTS.FIFTH(statistics[3].count));
    Console.print(OUTPUT_MESSAGES.MATCH_RESULTS.FOURTH(statistics[4].count));
    Console.print(OUTPUT_MESSAGES.MATCH_RESULTS.THIRD(statistics[5].count));
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULTS.SECOND(statistics['5+bonus'].count),
    );
    Console.print(OUTPUT_MESSAGES.MATCH_RESULTS.FIRST(statistics[6].count));
  }

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGES.PROFIT_RATE(profitRate));
  }
}

export default OutputView;
