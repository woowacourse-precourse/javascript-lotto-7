import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../Constants/Message.js';
import { LOTTO_NUMBER_STANDARD, WINNER } from '../Constants/Constant.js';

class Output {
  error(message) {
    Console.print(message);
  }

  lottoTicketCount(tickets) {
    Console.print(OUTPUT.ticketQuantity(tickets.length));
  }

  lottoTicketNumbers(tickets) {
    tickets.forEach((ticket) =>
      Console.print(
        OUTPUT.ticketNumber(
          ticket.getNumber().join(LOTTO_NUMBER_STANDARD.separator)
        )
      )
    );
  }

  lottoTicket(tickets) {
    this.lottoTicketCount(tickets);
    this.lottoTicketNumbers(tickets);
  }

  singleWinningResult(winner, results) {
    if (winner === WINNER[2]) {
      console.print(
        OUTPUT.bonusWinner(winner.match, winner.reward, results[winner.rank])
      );
    }

    if (winner !== WINNER[0]) {
      Console.print(
        OUTPUT.defaultWinner(winner.match, winner.reward, results[winner.rank])
      );
    }
  }

  totalWinningResult(results) {
    Console.print(OUTPUT.winningStatistics);
    [...WINNER]
      .reverse()
      .forEach((winner) => this.singleWinningResult(winner, results));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.totalProfit(Math.round(totalReturn * 100) / 100));
  }

  totalResult({ results, totalReturn }) {
    this.singleWinningResult(results);
    this.totalReturnResult(totalReturn);
  }
}

export default Output;
