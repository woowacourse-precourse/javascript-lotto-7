import { Console } from '@woowacourse/mission-utils';
import { MATCH_WINNING_DETAILS, OUTPUT_MESSAGES } from '../constants/constants.js';

const OutputView = {
  printLottoPurchaseCount(lottoCount) {
    Console.print(OUTPUT_MESSAGES.PURCHASE_COUNT.replace('{count}', lottoCount));
  },

  printLottoIssueDetails(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  },

  printWinningDetails(matchResults) {
    Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS_HEADER);

    matchResults.forEach((winningCount, matchCode) => {
      const winningDetails = MATCH_WINNING_DETAILS[matchCode];
      Console.print(winningDetails(winningCount));
    });
  },

  printRevenue(revenue) {
    Console.print(OUTPUT_MESSAGES.REVENUE_STATEMENT.replace('{revenue}', revenue));
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
}

export default OutputView;
