import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_CONSTANTS } from "../utils/ViewConstants.js";

class OutputView {
  static showPurchaseCount(count) {
    Console.print(`${count}${OUTPUT_CONSTANTS.PURCHASE_COUNT}`);
  }

  static showLottoNumbers(numbers) {
    Console.print(`[${numbers.join(", ")}]`);
  }

  static showWinningStatisticsResult() {
    Console.print(OUTPUT_CONSTANTS.WINNING_RESULT);
    Console.print(OUTPUT_CONSTANTS.RESULT_LINE);
  }

  static showWinningMessage(message, count) {
    Console.print(`${message} - ${count}개`);
  }

  static showProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
