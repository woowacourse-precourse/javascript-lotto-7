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

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

export default Output;
