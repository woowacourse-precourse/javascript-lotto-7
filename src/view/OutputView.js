import { Console } from '@woowacourse/mission-utils';
import { MATCH_WINNING_DETAILS } from '../constants/constants.js';

const OutputView = {
  printLottoPurchaseCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  },

  printLottoIssueDetails(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  },

  printWinningDetails(matchResults) {
    Console.print('\n당첨 통계\n---');

    Object.keys(matchResults).forEach((matchCode) => {
      const winningDetails = MATCH_WINNING_DETAILS[matchCode];
      Console.print(winningDetails(matchResults[matchCode]));
    });
  },

  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
}

export default OutputView;
