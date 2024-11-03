import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from '../constants/error.js';

class OutputView {
  // 게임 시작 메시지 출력
  static printStart() {
    Console.print('\n실행 결과');
  }

  // 구매 개수 출력
  static printPurchaseCount(count) {
    Console.print(MESSAGE.PURCHASE_COUNT(count));
  }

  // 당첨 통계 헤더 출력
  static printWinningStatistics() {
    Console.print(MESSAGE.WINNING_STATISTICS);
  }

  // 매칭 결과 출력
  static printMatchResult(matchCount, count) {
    switch (matchCount) {
      case 3:
        Console.print(`${MESSAGE.THREE_MATCHES} ${count}개`);
        break;
      case 4:
        Console.print(`${MESSAGE.FOUR_MATCHES} ${count}개`);
        break;
      case 5:
        Console.print(`${MESSAGE.FIVE_MATCHES} ${count}개`);
        break;
      case '5+':
        Console.print(`${MESSAGE.FIVE_BONUS_MATCHES} ${count}개`);
        break;
      case 6:
        Console.print(`${MESSAGE.SIX_MATCHES} ${count}개`);
        break;
      default:
        Console.print(`${ERROR.INVALID_MATCH_COUNT}`);
        break;
    }
  }

  static printRateOfReturn(revenue) {
    Console.print(MESSAGE.RATE_OF_RETURN(revenue));
  }

  static printError(message) {
    Console.print(`${message}\n`);
  }
}

export default OutputView;
