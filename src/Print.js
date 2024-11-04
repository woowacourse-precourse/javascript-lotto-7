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
    for (const [rank, count] of result) {
      const { match, needBonusBall, prize } = lottoInfo[rank];
      const matchText = {
        true: `${match}개 일치, 보너스 볼 일치`,
        false: `${match}개 일치`,
      }[needBonusBall];

      Console.print(`${matchText} (${prize.toLocaleString()}원) - ${count}개`);
    }
  }
}

export default Print;
