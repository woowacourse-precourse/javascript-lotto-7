import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/outputMessage.js";

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
    const winningMessages = [
      OUTPUT_MESSAGE.WINNING_RESULT_MATCH_SIX_PRIZE,
      OUTPUT_MESSAGE.WINNING_RESULT_MATCH_FIVE_WITH_BONUS_PRIZE,
      OUTPUT_MESSAGE.WINNING_RESULT_MATCH_FIVE_PRIZE,
      OUTPUT_MESSAGE.WINNING_RESULT_MATCH_FOUR_PRIZE,
      OUTPUT_MESSAGE.WINNING_RESULT_MATCH_THREE_PRIZE,
    ];

    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);

    for (
      let reverseIndex = winningMessages.length - 1;
      reverseIndex >= 0;
      reverseIndex--
    ) {
      Console.print(
        `${winningMessages[reverseIndex]}${winningStatisticsList[reverseIndex]}개`
      );
    }
  },

  printProfitability(profitability) {
    Console.print(
      `${OUTPUT_MESSAGE.PROFIT_RATE_PREFIX}${profitability}${OUTPUT_MESSAGE.PROFIT_RATE_SUFFIX}`
    );
  },
};

export default OutputValue;
