import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  async outputLottoNumbers(purchase, lottoNumbers) {
    MissionUtils.Console.print(
      `${purchase}개를 구매했습니다.\n` +
        lottoNumbers.map((numbers) => `[${numbers.join(", ")}]`).join("\n")
    );
  }

  async outputWinningResult(countMap) {
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${countMap[3] || 0}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${countMap[4] || 0}개`);
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${countMap[5] || 0}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${countMap["5+bonus"] || 0}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${countMap[6] || 0}개`
    );
  }

  async outputProfitRate(profitRate) {
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  printError(errorMessage) {
    MissionUtils.Console.print(errorMessage);
  }
}

export default OutputView;
