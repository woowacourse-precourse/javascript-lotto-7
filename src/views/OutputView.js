import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../utils/messages.js";

class OutputView {
  static printLottos(lottos) {
    MissionUtils.Console.print(`${lottos.length}개 구매했습니다.`);
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  static printResultStatistics(results) {
    MissionUtils.Console.print(OUTPUT_MESSAGES.WINNING_RESULT);
    MissionUtils.Console.print(
      `3개 일치 (${results[5].prize.toLocaleString()}원) - ${
        results[5].count
      }개`
    );
    MissionUtils.Console.print(
      `4개 일치 (${results[4].prize.toLocaleString()}원) - ${
        results[4].count
      }개`
    );
    MissionUtils.Console.print(
      `5개 일치 (${results[3].prize.toLocaleString()}원) - ${
        results[3].count
      }개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (${results[2].prize.toLocaleString()}원) - ${
        results[2].count
      }개`
    );
    MissionUtils.Console.print(
      `6개 일치 (${results[1].prize.toLocaleString()}원) - ${
        results[1].count
      }개`
    );
  }

  static printProfitRate(profitRate) {
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
