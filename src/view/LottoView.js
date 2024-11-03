import { MissionUtils } from "@woowacourse/mission-utils";
import {
  REWARDS,
  REWARD_MESSAGES,
  USER_INPUT_MESSAGES,
  PURCHASE_MESSAGES,
  ERROR_MESSAGES,
} from "../config/constants.js";

export default class LottoView {
  async getPurchaseAmount() {
    return await MissionUtils.Console.readLineAsync(
      USER_INPUT_MESSAGES.purchaseAmount
    );
  }

  showPurchasedLottoCount(count) {
    return MissionUtils.Console.print(PURCHASE_MESSAGES.purchasedCount(count));
  }

  showPurchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async getWinningLottoNumbers() {
    return await MissionUtils.Console.readLineAsync(
      USER_INPUT_MESSAGES.winningLottoNumbers
    );
  }

  async getWinningLottoBonusNumbers() {
    return await MissionUtils.Console.readLineAsync(
      USER_INPUT_MESSAGES.winningBonusNumber
    );
  }

  showWinningStatistics(matchCounts) {
    MissionUtils.Console.print(REWARD_MESSAGES.winningStatistics);
    REWARDS.forEach((reward, index) => {
      MissionUtils.Console.print(
        `${reward.count} (${reward.prize}) - ${matchCounts[index]}개`
      );
    });
  }

  showTotalReturnRate(totalReturnRate) {
    MissionUtils.Console.print(
      REWARD_MESSAGES.totalReturnRate(totalReturnRate)
    );
  }

  printError(error) {
    MissionUtils.Console.print(error);
  }
}
