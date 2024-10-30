import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottoPurchaseCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.\n`);
  },

  printLottoIssueDetails(lottos) {
    Console.print('');
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
