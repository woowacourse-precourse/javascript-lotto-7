import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../Constants/Message.js';
import { LOTTO_NUMBER_STANDARD, PRIZE } from '../Constants/Constant.js';

class Output {
  error(message) {
    Console.print(message);
  }

  lottoTicketCount(tickets) {
    console.log();
    Console.print(OUTPUT.ticketQuantity(tickets.length));
  }

  lottoTicketNumbers(tickets) {
    tickets.forEach((ticket) =>
      Console.print(
        OUTPUT.ticketNumber(
          ticket.getNumbers().join(`${LOTTO_NUMBER_STANDARD.separator}`)
        )
      )
    );
  }

  singleWinningResult(prize, results) {
    if (prize === PRIZE[2]) {
      Console.print(
        OUTPUT.bonusPrize(prize.match, prize.reward, results[prize.rank])
      );
    }

    if (prize !== PRIZE[0]) {
      Console.print(
        OUTPUT.defaultPrize(prize.match, prize.reward, results[prize.rank])
      );
    }
  }

  totalWinningResult(results) {
    Console.print(OUTPUT.winningStatistics);
    [...PRIZE]
      .reverse()
      .forEach((prize) => this.singleWinningResult(prize, results));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.totalProfit(totalReturn));
  }
}

export default Output;
