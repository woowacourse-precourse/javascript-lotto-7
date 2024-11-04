import { Console } from "@woowacourse/mission-utils";
import { LOTTO_STATISTICS } from "../constants/Statistics.js";

export default class OutputView {
  static async printLottoCount(lottoCount) {
    return await Console.print(`${lottoCount}개를 구매했습니다. `);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  static printLottoStatistics(totalSpent) {
    Console.print("당첨 통계\n---");

    Object.entries(LOTTO_STATISTICS).forEach(
      ([key, { number, price, count }]) => {
        if (key === "bonus") {
          Console.print(
            `5개 일치, 보너스 볼 일치 (${price.toLocaleString()}원) - ${count}개`
          );
        } else {
          Console.print(
            `${number}개 일치 (${price.toLocaleString()}원) - ${count}개`
          );
        }
      }
    );

    const earningsRate = OutputView.calculateEarningsRate(totalSpent);
    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
  }

  static calculateEarningsRate(totalSpent) {
    const totalPrize = Object.values(LOTTO_STATISTICS).reduce(
      (acc, { price, count }) => acc + price * count,
      0
    );
    const earningsRate = (totalPrize / totalSpent) * 100;
    return Math.round(earningsRate * 10) / 10;
  }
}
