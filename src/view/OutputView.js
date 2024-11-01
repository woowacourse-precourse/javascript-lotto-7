import { printResult } from "../utils/util.js";

class OutputView {
  static printLottoCount(count) {
    printResult(`${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottos) {
    const lottoNumbers = lottos.map(
      (lotto) => `[${lotto.getNumbers().join(",")}]`
    );
    printResult(lottoNumbers.join("\n"));
  }

  static printWinningStatistics(matchCounts) {
    printResult("\n당첨 통계\n---");
    printResult(`3개 일치 (5,000원) - ${matchCounts["3"]}개`);
    printResult(`4개 일치 (50,000원) - ${matchCounts["4"]}개`);
    printResult(`5개 일치 (1,500,000원) - ${matchCounts["5"]}개`);
    printResult(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts["bonus"]}개`
    );
    printResult(`6개 일치 (2,000,000,000원) - ${matchCounts["6"]}개`);
  }

  static printProfit(profit) {
    printResult(`총 수익률은 ${profit}%입니다.`);
  }
}

export default OutputView;
