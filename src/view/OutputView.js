import { OUTPUT_MESSAGE } from "../constants/messages.js";
import { printResult } from "../utils/util.js";

class OutputView {
  static printLottoCount(count) {
    printResult(OUTPUT_MESSAGE.LOTTO_COUNT(count));
  }

  static printLottoNumbers(lottos) {
    const lottoNumbers = lottos.map(
      (lotto) => `[${lotto.getNumbers().join(",")}]`
    );
    printResult(lottoNumbers.join("\n"));
  }

  static printWinningStatistics(matchCounts) {
    printResult(OUTPUT_MESSAGE.LOTTO_STATISTICS);
    printResult(`3개 일치 (5,000원) - ${matchCounts["3"]}개`);
    printResult(`4개 일치 (50,000원) - ${matchCounts["4"]}개`);
    printResult(`5개 일치 (1,500,000원) - ${matchCounts["5"]}개`);
    printResult(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts["bonus"]}개`
    );
    printResult(`6개 일치 (2,000,000,000원) - ${matchCounts["6"]}개`);
  }

  static printProfit(profit) {
    printResult(OUTPUT_MESSAGE.PROFIT(profit));
  }
}

export default OutputView;
