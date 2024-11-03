import { Console } from "@woowacourse/mission-utils";
import { UI_MESSAGES } from "../utils/constants.js";

export default class InputView {
  static printPurchasedLottos(lottos) {
    Console.print(UI_MESSAGES.OUTPUT.PURCHASE_COUNT(lottos.length));
    lottos.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(', ')}]`));
    this.printEmptyLine();
  }

  static printResults(statistics) {
    Console.print(UI_MESSAGES.OUTPUT.STATISTICS_HEADER);
    Console.print(UI_MESSAGES.OUTPUT.STATISTICS_DIVIDER);
    Console.print(UI_MESSAGES.OUTPUT.MATCH_THREE(statistics.FIFTH));
    Console.print(UI_MESSAGES.OUTPUT.MATCH_FOUR(statistics.FOURTH));
    Console.print(UI_MESSAGES.OUTPUT.MATCH_FIVE(statistics.THIRD));
    Console.print(UI_MESSAGES.OUTPUT.MATCH_FIVE_BONUS(statistics.SECOND));
    Console.print(UI_MESSAGES.OUTPUT.MATCH_SIX(statistics.FIRST));
  }

  static printProfitRate(rate) {
    Console.print(UI_MESSAGES.OUTPUT.PROFIT_RATE(rate));
  }

  static printError(message) {
    Console.print(message);
  }

  static printEmptyLine() {
    Console.print("");
  }
}
