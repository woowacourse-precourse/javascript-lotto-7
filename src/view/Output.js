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

  winningResult(results) {
    Console.print(OUTPUT.winningStatistics);

    Console.print(OUTPUT.fifthWinner(results[WINNER.fifthWinner.rank]));
    Console.print(OUTPUT.fourthWinner(results[WINNER.fourthWinner.rank]));
    Console.print(OUTPUT.thirdWinner(results[WINNER.thirdWinner.rank]));
    Console.print(OUTPUT.secondWinner(results[WINNER.secondWinner.rank]));
    Console.print(OUTPUT.firstWinner(results[WINNER.firstWinner.rank]));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.totalProfit(Math.round(totalReturn * 100) / 100));
  }

  totalResult(result) {
    const { results, totalReturn } = result;

    this.winningResult(results);
    this.totalReturnResult(totalReturn);
  }
}

export default Output;
