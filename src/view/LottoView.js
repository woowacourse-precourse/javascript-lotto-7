import { Console } from "@woowacourse/mission-utils";
import { REWARDS } from "../config/constants.js";

export default class LottoView {
  async getPurchaseAmount() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  showPurchasedLottoCount(count) {
    return Console.print(`\n${count}개를 구매했습니다.`);
  }

  showPurchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async getWinningLottoNumbers() {
    return await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
  }

  async getWinningLottoBonusNumbers() {
    return await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
  }

  showWinningStatistics(matchCounts) {
    Console.print("\n당첨 통계\n---");
    REWARDS.forEach((reward, index) => {
      Console.print(
        `${reward.count} (${reward.prize}) - ${matchCounts[index]}개`
      );
    });
  }

  showTotalReturnRate(totalReturnRate) {
    Console.print(`총 수익률은 ${totalReturnRate}%입니다.`);
  }
}
