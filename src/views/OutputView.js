import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/viewMessages.js';
import { LOTTO, FORMAT, WINNING_RANK } from '../constants/lottoConstants.js';

class OutputView {
  printLottos(amount, lottos) {
    const lottoCount = Math.floor(amount / LOTTO.PRICE);
    Console.print(OUTPUT_MESSAGES.PURCHASE_RESULT(lottoCount));
    lottos.forEach((lotto) => {
      Console.print(
        `${FORMAT.NUMBER_LIST_START}${lotto.getNumbers().join(FORMAT.NUMBERS_SEPARATOR)}${FORMAT.NUMBER_LIST_END}`,
      );
    });
  }

  printMatchResults(statistics) {
    Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS);
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULTS.FIFTH(statistics[WINNING_RANK.FIFTH].count),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULTS.FOURTH(
        statistics[WINNING_RANK.FOURTH].count,
      ),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULTS.THIRD(statistics[WINNING_RANK.THIRD].count),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULTS.SECOND(
        statistics[WINNING_RANK.SECOND].count,
      ),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULTS.FIRST(statistics[WINNING_RANK.FIRST].count),
    );
  }

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGES.PROFIT_RATE(profitRate));
  }
}

export default OutputView;
