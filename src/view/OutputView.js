import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottoPurchaseCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  },

  printLottoIssueDetails(lottos) {
    // TODO: 출력 포맷하기
    Console.print(lottos);
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
