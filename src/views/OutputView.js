// @ts-nocheck

import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../utils/messages.js";

const OutputView = {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printResultStatistics(results) {
    Console.print(OUTPUT_MESSAGES.WINNING_RESULT);
    Console.print(
      `3개 일치 (${results[5].prize.toLocaleString()}원) - ${
        results[5].count
      }개`
    );
    Console.print(
      `4개 일치 (${results[4].prize.toLocaleString()}원) - ${
        results[4].count
      }개`
    );
    Console.print(
      `5개 일치 (${results[3].prize.toLocaleString()}원) - ${
        results[3].count
      }개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${results[2].prize.toLocaleString()}원) - ${
        results[2].count
      }개`
    );
    Console.print(
      `6개 일치 (${results[1].prize.toLocaleString()}원) - ${
        results[1].count
      }개`
    );
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
};

export default OutputView;
