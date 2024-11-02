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
  static pickLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.numberCount
    );
  }

  issueTicket(price) {
    this.#validatePrice(price);

    const tickets = [];
    const amount = price / LOTTO.ticketPrice;

    for (let i = 0; i < amount; i++) {
      const ticket = new Lotto(LotteryRetailer.pickLottoNumber());
      tickets.push(ticket);
    }

    return tickets;
  }

  showWinningResult(tickets, winningNumbers) {
    const prize = this.#evaluateTicketWinnings(tickets, winningNumbers);
    this.#showWinningStats(prize);
  }

  #validatePrice(price) {
    if (isNaN(price)) {
      throw Error(ERROR_MESSAGE.price.notNumber);
    }

    const isValidAmountUnit = price % LOTTO.ticketPrice === 0;
    if (!isValidAmountUnit) {
      throw Error(ERROR_MESSAGE.price.invaildAmountUnit);
    }
  }

  #evaluateTicketWinnings(tickets, winningNumbers) {
    const matchResults = tickets.map((ticket) => ticket.match(winningNumbers));

    const prize = {
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

    return prize;
  }

  #showWinningStats(prize) {
    Console.print(OUTPUT_MESSAGE.statistics);

    Object.entries(prize).forEach(([key, value]) => {
      Console.print(
        OUTPUT_MESSAGE.statisticsDetail({
          prize: key,
          matchingCount: MATCHING_COUNT[key],
          lotteryPrize: PRIZE[key],
          winningCount: value,
        })
      );
    });
  }
}

export default LotteryRetailer;
