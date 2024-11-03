import { OUTPUT_MESSAGE } from "../constants/messages.js";
import RANKS from "../constants/rank.js";
import { printResult } from "../utils/util.js";

class OutputView {
  static printLottoCount(count) {
    printResult(OUTPUT_MESSAGE.LOTTO_COUNT(count));
  }

  static printLottoNumbers(lottos) {
    const lottoNumbers = lottos.map(
      (lotto) => `[${lotto.getNumbers().join(", ")}]`
    );
    printResult(lottoNumbers.join("\n"));
  }

  static printWinningStatistics(matchCounts) {
    printResult(OUTPUT_MESSAGE.LOTTO_STATISTICS);
    Object.keys(RANKS).forEach((key) => {
      const rank = RANKS[key];
      const count = matchCounts[key];
      printResult(`${rank.message}${count}${OUTPUT_MESSAGE.COUNT}`);
    });
  }

  static printProfit(profit) {
    printResult(OUTPUT_MESSAGE.PROFIT(profit));
  }
}

export default OutputView;
