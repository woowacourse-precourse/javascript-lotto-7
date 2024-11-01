import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../Constants/Message.js';
import {
  LOTTO_NUMBER_STANDARD,
  firstWinner,
  secondWinner,
  thirdWinner,
  fourthWinner,
  fifthWinner,
} from '../Constants/Constant.js';

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

    Console.print(OUTPUT.fifthWinner(results[fifthWinner.rank]));
    Console.print(OUTPUT.fourthWinner(results[fourthWinner.rank]));
    Console.print(OUTPUT.thirdWinner(results[thirdWinner.rank]));
    Console.print(OUTPUT.secondWinner(results[secondWinner.rank]));
    Console.print(OUTPUT.firstWinner(results[firstWinner.rank]));
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
