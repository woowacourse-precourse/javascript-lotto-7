import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";

const output = {
  lottos: (lottos) => {
    lottos.forEach((lotto) => Console.print(lotto.numbers));
  },

  lottosCount(count) {
    Console.print(MESSAGES.PURCHASE_RESULT_COUNT(count));
  },

  finalStatistics() {
    Console.print(MESSAGES.WINNING_STATISTICS);
  },

  prize(count, index) {
    Console.print(MESSAGES.PRIZE(count)[index]);
  },

  totalRateOfReturn(rate) {
    Console.print(MESSAGES.TOTAL_RATE_OF_RETURN(rate));
  },
};

export default output;
