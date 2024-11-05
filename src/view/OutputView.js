import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, PRIZE } from "../constants.js";

class OutputView {
  static printLottoQuantity(amount) {
    Console.print(`${amount}개를 구매했습니다.`);
  }

  static printLottoBundle(lotto) {
    for (let i = 0; i < lotto.length; i++) {
      Console.print(`[${lotto[i].getNumbers().join(", ")}]`);
    }
    Console.print("\n");
  }

  static printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }

  static printStatistics(winning) {
    Console.print(MESSAGE.OUTPUT.STATISTICS);

    const entries = Object.entries(winning).sort(
      ([rankA], [rankB]) => rankA - rankB
    );

    entries.forEach(([rank, count]) => {
      if (rank == 5.5) {
        Console.print(
          `5개 일치, 보너스 볼 일치 (${PRIZE[rank].toLocaleString()}원) - ${count}개`
        );
      } else {
        Console.print(
          `${rank}개 일치 (${PRIZE[rank].toLocaleString()}원) - ${count}개`
        );
      }
    });
  }
}

export default OutputView;
