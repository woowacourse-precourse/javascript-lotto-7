import { Console } from "@woowacourse/mission-utils";

import { lottoInfo } from "./Static/const.js";

class Print {
  constructor() {}

  static lottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.\n`);

    for (const lotto of lottos) {
      Console.print(
        `[${lotto
          .getNumbers()
          .sort((a, b) => a - b)
          .join(", ")}]`
      );
    }
  }

  static lottoResult(result) {
    Console.print("\n당첨 통계\n---");

    for (const [rank, count] of result) {
      const { match, hasBonusBall, prize } = lottoInfo[rank];
      const matchText = {
        true: `${match}개 일치, 보너스 볼 일치`,
        false: `${match}개 일치`,
      }[hasBonusBall];

      Console.print(`${matchText} (${prize.toLocaleString()}원) - ${count}개`);
    }
  }

  static profitRate(money, result) {
    let totalPrize = 0;

    for (const [rank, count] of result) {
      if (!count) continue;

      const { prize } = lottoInfo[rank];
      totalPrize += count * prize;
    }

    const rate = (totalPrize / money) * 100;
    Console.print(`총 수익률은 ${rate.toFixed(1)}%입니다.`);
  }
}

export default Print;
