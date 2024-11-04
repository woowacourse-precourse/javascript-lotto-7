import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { OUTPUT_MESSAGE } from "./constants/ioMessage.js";
import LottoResult from "./LottoResult.js";

class Output {
  static printTicketCount(ticketCount) {
    Console.print(OUTPUT_MESSAGE.PURCHASED_LOTTO(ticketCount));
  }

  static printLottoNumbers(tickets) {
    // Console.print(`${tickets}`);
    tickets.forEach((ticketNumbers) => {
      Console.print(`[${ticketNumbers.join(", ")}]`);
    });
  }

  static printWinningResult() {
    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS(LottoResult.getStatisitcs));
  }
}

export default Output;
