import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottoPurchaseCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  },

  printLottoIssueDetails(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  },

  printWinningDetails() {
    Console.print('');
  },

  printRateOfReturn() {
    Console.print('');
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
}

export default OutputView;
