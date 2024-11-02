import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages.js";

class OutputView {
  static printPurchasedLottos(numberOfLottoes, lottoes) {
    Console.print(`\n${numberOfLottoes}${MESSAGES.BUY_LOTTO}`);

    lottoes.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  static printWinningStatistics(howManyMatch, rateOfReturn) {
    Console.print(`\n${MESSAGES.WON_STATISTICS}`);
    Console.print(MESSAGES.DIVIDING_LINE);
    Console.print(
      `${MESSAGES.MATCHED_THREE}${howManyMatch[0]}${MESSAGES.COUNT}`
    );
    Console.print(
      `${MESSAGES.MATCHED_FOUR}${howManyMatch[1]}${MESSAGES.COUNT}`
    );
    Console.print(
      `${MESSAGES.MATCHED_FIVE}${howManyMatch[2]}${MESSAGES.COUNT}`
    );
    Console.print(
      `${MESSAGES.MATCHED_FIVE_WITH_BONUS}${howManyMatch[3]}${MESSAGES.COUNT}`
    );
    Console.print(`${MESSAGES.MATCHED_SIX}${howManyMatch[4]}${MESSAGES.COUNT}`);
    Console.print(
      `${MESSAGES.TOTAL_RATE_OF_RETURN}${rateOfReturn}${MESSAGES.PERCENT}`
    );
  }

  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;
