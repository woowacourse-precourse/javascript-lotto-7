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
    const matchMessages = [
      { message: MESSAGES.MATCHED_THREE, count: howManyMatch[0] },
      { message: MESSAGES.MATCHED_FOUR, count: howManyMatch[1] },
      { message: MESSAGES.MATCHED_FIVE, count: howManyMatch[2] },
      { message: MESSAGES.MATCHED_FIVE_WITH_BONUS, count: howManyMatch[3] },
      { message: MESSAGES.MATCHED_SIX, count: howManyMatch[4] },
    ];
    matchMessages.forEach(({ message, count }) => {
      Console.print(`${message}${count}${MESSAGES.COUNT}`);
    });
    
    Console.print(`${MESSAGES.TOTAL_RATE_OF_RETURN}${rateOfReturn}${MESSAGES.PERCENT}`);
  }

  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;
