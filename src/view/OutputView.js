import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constant/messages.js";
import { MATCHING_COUNT } from "../constant/number.js";
const outputView = {
  printWinningStatistic() {
    Console.print(MESSAGES.output.winning_statistic);
  },
  printMatchingCountIsThree(totalStatistic) {
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.three,
        false,
        totalStatistic[MATCHING_COUNT.three]
      )
    );
  },
  printMatchingCountIsFour(totalStatistic) {
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.four,
        false,
        totalStatistic[MATCHING_COUNT.four]
      )
    );
  },
  printMatchingCountIsFive(totalStatistic) {
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.five,
        false,
        totalStatistic[MATCHING_COUNT.five]
      )
    );
  },
  printMatchingCountIsFiveAndBonus(totalStatistic) {
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.five,
        true,
        totalStatistic["bonus"]
      )
    );
  },
  printMatchingCountIsSix(totalStatistic) {
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.six,
        false,
        totalStatistic[MATCHING_COUNT.six]
      )
    );
  },
  printotalProfitRatio(ratio) {
    Console.print(MESSAGES.output.ratioOfProfit(ratio));
  },
  printLottoTicketCount(numberOfLotto) {
    // 로또 티켓 개수 출력
    Console.print(MESSAGES.output.lottoCount(numberOfLotto));
  },
  printLottoTickets(lottoTickets) {
    for (const ticket of lottoTickets) {
      Console.print(ticket.getLottoNumbers());
    }
  },
};

export default outputView;
