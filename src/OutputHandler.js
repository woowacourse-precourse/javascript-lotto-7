import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './lottoConstants.js';

class OutputHandler {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printLottoCount(lottoCount) {
    const formattedCount = lottoCount.toLocaleString();
    Console.print(`\n${formattedCount}${OUTPUT_MESSAGE.PURCHASED_COUNT}`);
  }

  printLottoTickets(lottoTickets) {
    lottoTickets.forEach(ticket => {
      Console.print(ticket.toString());
    });
  }
}

export default OutputHandler;
