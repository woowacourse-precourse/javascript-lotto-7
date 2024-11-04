import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import ERROR from '../constants/error.js';

class OutputView {
  static printPurchaseCount(count) {
    Console.print(MESSAGE.PURCHASE_COUNT(count));
  }

  static printLottoTicket(ticket) {
    Console.print(`[${ticket.join(', ')}]`);
  }

  static printWinningStatistics() {
    Console.print(MESSAGE.WINNING_STATISTICS);
  }

  static printMatchResult(matchCount, count) {
    switch (matchCount) {
      case '3':
        Console.print(`${MESSAGE.THREE_MATCHES} ${count}개`);
        break;
      case '4':
        Console.print(`${MESSAGE.FOUR_MATCHES} ${count}개`);
        break;
      case '5':
        Console.print(`${MESSAGE.FIVE_MATCHES} ${count}개`);
        break;
      case '5+':
        Console.print(`${MESSAGE.FIVE_BONUS_MATCHES} ${count}개`);
        break;
      case '6':
        Console.print(`${MESSAGE.SIX_MATCHES} ${count}개`);
        break;
      default:
        Console.print(ERROR.INVALID_MATCH_COUNT);
        break;
    }
  }

  static printRateOfReturn(revenue) {
    Console.print(MESSAGE.RATE_OF_RETURN(revenue)); // revenue 인자 전달
  }

  static printError(message, name) {
    Console.print(`${message} (${name})\n`);
  }
}

export default OutputView;
