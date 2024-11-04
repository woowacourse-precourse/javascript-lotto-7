import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/constants.js";

const Output = {
  printCountOfLotto(count) {
    Console.print(MESSAGES.PURCHASED_COUNT(count));
  },

  printLotto(tickets) {
    tickets.forEach((ticket) => {
      Console.print(MESSAGES.LOTTO_NUMBERS(ticket));
    });
  },

  printResults(result) {
    Console.print(MESSAGES.RESULT_STATISTICS);
    Console.print(MESSAGES.MATCH_COUNT(3, 5000, result.FIFTH));
    Console.print(MESSAGES.MATCH_COUNT(4, 50000, result.FOURTH));
    Console.print(MESSAGES.MATCH_COUNT(5, 1500000, result.THIRD));
    Console.print(MESSAGES.BONUS_MATCH_COUNT(30000000, result.SECOND));
    Console.print(MESSAGES.MATCH_COUNT(6, 2000000000, result.FIRST));
  },

  printProfitRate(rate) {
    Console.print(MESSAGES.TOTAL_PROFIT_RATE(rate));
  },

  printError(error) {
    Console.print(error);
  },
};

export default Output;
