import { Console } from "@woowacourse/mission-utils";
import { LOTTO_STATISTICS } from "../constants/Statistics.js";
import { OUTPUT_VIEWS_MESSAGE } from "../constants/Message.js";

export default class OutputView {
  static async printLottoCount(lottoCount) {
    return await Console.print(
      OUTPUT_VIEWS_MESSAGE.PRINT_OUTPUT_COUNT(lottoCount)
    );
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  static printLottoStatistics(totalSpent) {
    Console.print(OUTPUT_VIEWS_MESSAGE.PRINT_STATISTICS_START);

    Object.entries(LOTTO_STATISTICS).forEach(
      ([key, { number, price, count }]) => {
        if (key === "bonus") {
          Console.print(
            OUTPUT_VIEWS_MESSAGE.PRINT_STATISTICS_MATCH_BONUS(price, count)
          );
        } else {
          Console.print(
            OUTPUT_VIEWS_MESSAGE.PRINT_STATISTICS_MATCH(number, price, count)
          );
        }
      }
    );

    const earningsRate = OutputView.calculateEarningsRate(totalSpent);
    Console.print(OUTPUT_VIEWS_MESSAGE.PRINT_EARNINGS_RATE(earningsRate));
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
