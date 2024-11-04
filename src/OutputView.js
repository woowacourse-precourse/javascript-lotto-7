import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  printWinningStatistics(winningResult) {
    MissionUtils.Console.print("\n당첨 통계\n---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${winningResult[3].count}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${winningResult[4].count}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${winningResult[5].count}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningResult[5.5].count}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${winningResult[6].count}개`
    );
  }

  printProfitRate(totalPrize, lottoCount) {
    const profitRate = ((totalPrize / (lottoCount * 1000)) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
