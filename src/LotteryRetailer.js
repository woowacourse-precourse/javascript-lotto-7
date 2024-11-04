import { Console, Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';

import {
  ERROR_MESSAGE,
  LOTTO,
  MATCHING_COUNT,
  OUTPUT_MESSAGE,
  PRIZE,
} from './constants/index.js';

class LotteryRetailer {
  issueTicket(purchasePrice) {
    const tickets = [];
    const amount = purchasePrice / LOTTO.ticketPrice;

    for (let i = 0; i < amount; i++) {
      const ticket = new Lotto(this.pickLottoNumber());
      tickets.push(ticket);
    }

    return tickets;
  }

  pickLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.numberCount
    );
  }

  evaluateTicketWinnings(tickets, winningNumbers, bonus) {
    const matchResults = tickets.map((ticket) =>
      ticket.match(winningNumbers, bonus)
    );

    const ticketCountForPrize = {
      fifth: matchResults //
        .filter(({ matchingCount }) => matchingCount === 3).length,
      fourth: matchResults //
        .filter(({ matchingCount }) => matchingCount === 4).length,
      third: matchResults //
        .filter(({ matchingCount }) => matchingCount === 5).length,
      second: matchResults //
        .filter(
          ({ matchingCount, hasBonus }) => matchingCount === 5 && hasBonus
        ).length,
      first: matchResults //
        .filter(({ matchingCount }) => matchingCount === 6).length,
    };

    return ticketCountForPrize;
  }

  evaluateLotteryYield(ticketCountForPrize, purchasePrice) {
    const returns = this.#calculateReturns(ticketCountForPrize);
    const lotteryYield = (returns / purchasePrice) * 100;
    return Math.round((lotteryYield + Number.EPSILON) * 10) / 10;
  }

  #calculateReturns(ticketCountForPrize) {
    return Object.entries(ticketCountForPrize) //
      .reduce((returns, [rank, amount]) => returns + PRIZE[rank] * amount, 0);
  }
}

export default LotteryRetailer;
