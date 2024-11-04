import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_CONSTANTS } from "../utils/constants/ViewConstants.js";
import { LOTTO_RANK } from "../utils/constants/GameConstants.js";

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

  static showWinningMessage(results) {
    Object.values(LOTTO_RANK)
      .sort((a, b) => a.matchCount - b.matchCount)
      .forEach((rank) => {
        const count = rank.hasBonus
          ? results["5B"] || 0
          : results[rank.matchCount] || 0;
        Console.print(`${rank.message} - ${count}개`);
      });
  }

  static showProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  static showError(message) {
    Console.print(message);
  }
}

export default OutputView;
