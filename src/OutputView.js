import { Console } from '@woowacourse/mission-utils';

import { MATCHING_COUNT, OUTPUT_MESSAGE, PRIZE } from './constants/index.js';

class OutputView {
  showLottoTickets(tickets) {
    Console.print(OUTPUT_MESSAGE.amount(tickets.length));
    tickets.forEach((ticket) => ticket.show());
    Console.print('');
  }

  showWinningStatistics(ticketCountForPrize) {
    Console.print(OUTPUT_MESSAGE.statistics);

    Object.entries(ticketCountForPrize).forEach(([key, value]) => {
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

  showLotteryYield(rate) {
    Console.print(OUTPUT_MESSAGE.lotteryYield(rate));
  }
}

export default OutputView;
