import { Console } from '@woowacourse/mission-utils';
import { RESULT_MSG } from '../constants/messages.js';

class Output {
  static displayLottoCount(count) {
    Console.print(RESULT_MSG.LOTTO_COUNT(count));
  }

  static displayTickets(tickets) {
    tickets.forEach((ticket) => {
      Console.print(RESULT_MSG.TICKET_NUMBERS(ticket));
    });
  }

  static displayError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default Output;
