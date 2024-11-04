import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message + "\n");
  }

  static printPurchaseInfo(purchaseDTO) {
    Console.print(`\n${purchaseDTO.lottoCount}개를 구매했습니다.`);
    purchaseDTO.lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  static printRankResult(rankDTO) {
    Console.print("\n당첨 통계\n---");
    const rank = rankDTO.lottoRanks;
    Console.print(`3개 일치 (5,000원) - ${rank.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${rank.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rank.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${rank.first}개`);
    Console.print(`총 수익률은 ${rankDTO.profitRate}%입니다.`);
  }
}

export default OutputView;
