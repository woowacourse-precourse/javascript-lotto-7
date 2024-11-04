import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/OutputMessage.js";

const OutputValue = {
  printLottoSummary(lottoQuantity, ticketList) {
    this.printLottoTicketCount(lottoQuantity);
    this.printLottoTicketList(ticketList);
  },

  printLottoTicketCount(lottoQuantity) {
    Console.print(`\n${lottoQuantity}${OUTPUT_MESSAGE.PURCHASE_NUMBER}`);
  },

  printLottoTicketList(ticketList) {
    ticketList.forEach((ticket) => {
      Console.print(`[${ticket.join(", ")}]`);
    });
  },

  printResult(winningStatisticsList, profitability) {
    this.printWinningStatistics(winningStatisticsList);
    this.printProfitability(profitability);
  },

  printWinningStatistics(winningStatisticsList) {
    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
    Console.print(
      `${OUTPUT_MESSAGE.WINNING_RESULT_MATCH_SIX_PRIZE}${winningStatisticsList[0]}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.WINNING_RESULT_MATCH_FIVE_WITH_BONUS_PRIZE}${winningStatisticsList[1]}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.WINNING_RESULT_MATCH_FIVE_PRIZE}${winningStatisticsList[2]}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.WINNING_RESULT_MATCH_FOUR_PRIZE}${winningStatisticsList[3]}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.WINNING_RESULT_MATCH_THREE_PRIZE}${winningStatisticsList[4]}개`
    );
  },

  printProfitability(profitability) {
    Console.print(
      `${OUTPUT_MESSAGE.PROFIT_RATE_PREFIX}${profitability}${OUTPUT_MESSAGE.PROFIT_RATE_SUFFIX}`
    );
  },
};

export default OutputValue;
