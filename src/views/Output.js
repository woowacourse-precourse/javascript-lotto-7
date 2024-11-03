import { Console } from '@woowacourse/mission-utils';
import { RESULT_MSG } from '../constants/messages.js';

class Output {
  static displayLottoCount(count) {
    Console.print(`\n${RESULT_MSG.LOTTO_COUNT(count)}`);
  }

  static displayTickets(tickets) {
    tickets.forEach((ticket) => {
      Console.print(RESULT_MSG.TICKET_NUMBERS(ticket));
    });
  }

  static displayWinningNumbersResult(result) {
    Console.print(`\n${RESULT_MSG.WINNING_STATS_HEADER}`);
    Console.print(`${RESULT_MSG.MATCH_RESULT.MATCH_3} - ${result.match3}개`);
    Console.print(`${RESULT_MSG.MATCH_RESULT.MATCH_4} - ${result.match4}개`);
    Console.print(`${RESULT_MSG.MATCH_RESULT.MATCH_5} - ${result.match5}개`);
    Console.print(
      `${RESULT_MSG.MATCH_RESULT.MATCH_5_BONUS} - ${result.match5PlusBonus}개`,
    );
    Console.print(`${RESULT_MSG.MATCH_RESULT.MATCH_6} - ${result.match6}개`);
  }

  static displayYield(yieldRate) {
    Console.print(RESULT_MSG.YIELD(yieldRate));
  }

  static displayError(message) {
    Console.print(`[ERROR] ${message}`);
  }
}

export default Output;
