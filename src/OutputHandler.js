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

  printWinningResult(winningResult) {
    const results = [
      { message: OUTPUT_MESSAGE.MATCH_THREE, count: winningResult.fifth },
      { message: OUTPUT_MESSAGE.MATCH_FOUR, count: winningResult.fourth },
      { message: OUTPUT_MESSAGE.MATCH_FIVE, count: winningResult.third },
      { message: OUTPUT_MESSAGE.MATCH_FIVE_WITH_BONUS, count: winningResult.second },
      { message: OUTPUT_MESSAGE.MATCH_SIX, count: winningResult.first },
    ];

    Console.print(OUTPUT_MESSAGE.WINNING_RATE);
    results.forEach(result => {
      Console.print(`${result.message}${result.count}${OUTPUT_MESSAGE.COUNT}`);
    });
  }
}

export default OutputHandler;
