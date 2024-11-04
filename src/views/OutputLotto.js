import { Console } from "@woowacourse/mission-utils";
import { SYSTEM_MESSAGES } from "../constants/SystemMessages.js";
import { RANKING_MATCH_COUNT, RANKING_MONEY } from "../constants/Settings.js";

class OutputLotto {
  showLottoNumbers(array) {
    Console.print(SYSTEM_MESSAGES.print_purchase_lotto(array.length));
    array.forEach((ticket) => {
      const numberToStr = "[" + ticket.join(", ") + "]";
      Console.print(numberToStr);
    });
  }

  showRateOfReturn(value) {
    Console.print(SYSTEM_MESSAGES.print_rate_of_return(value));
  }

  showMatchStatistics(matchCounts) {
    Console.print(SYSTEM_MESSAGES.OUPUT_STATIC);
    Console.print(
      SYSTEM_MESSAGES.print_match_execpt_bonus(
        RANKING_MATCH_COUNT.fifth,
        RANKING_MONEY.fifth,
        matchCounts.Rank5
      )
    );
    Console.print(
      SYSTEM_MESSAGES.print_match_execpt_bonus(
        RANKING_MATCH_COUNT.fourth,
        RANKING_MONEY.fourth,
        matchCounts.Rank4
      )
    );
    Console.print(
      SYSTEM_MESSAGES.print_match_execpt_bonus(
        RANKING_MATCH_COUNT.third,
        RANKING_MONEY.third,
        matchCounts.Rank3
      )
    );
    Console.print(
      SYSTEM_MESSAGES.print_match_with_bonus(
        RANKING_MATCH_COUNT.first,
        RANKING_MONEY.first,
        matchCounts.Rank2
      )
    );
    Console.print(
      SYSTEM_MESSAGES.print_match_execpt_bonus(
        RANKING_MATCH_COUNT.first,
        RANKING_MONEY.first,
        matchCounts.Rank1
      )
    );
  }
}

export default OutputLotto;
