import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottoIssueDetails(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.\n`);
  },

  printWinningDetails() {
    Console.print('');
  },

  printRateOfReturn() {
    Console.print('');
  },

  printErrorMessage(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
  },
}

export default OutputView;
