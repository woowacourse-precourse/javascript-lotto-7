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

  singleWinningResult(prize, results) {
    return prize === PRIZE.SECOND_PRIZE
      ? Console.print(
          OUTPUT.second_prize(prize.match, prize.reward, results[prize.rank])
        )
      : Console.print(
          OUTPUT.default_prize(prize.match, prize.reward, results[prize.rank])
        );
  }
  totalWinningResult(results) {
    Console.print(OUTPUT.winningStatistics);
    const prizeList = [
      WINNER.fifthWinner,
      WINNER.fourthWinnerWinner,
      WINNER.thirdWinner,
      WINNER.secondWinner,
      WINNER.firstWinner,
    ];

    prizeList.forEach((prize) => this.singleWinningResult(prize, results));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.totalProfit(Math.round(totalReturn * 100) / 100));
  }

  totalResult(result) {
    const { results, totalReturn } = result;

    this.singleWinningResult(results);
    this.totalReturnResult(totalReturn);
  }
}

export default Output;
