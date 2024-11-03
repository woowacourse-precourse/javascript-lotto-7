import { MissionUtils } from "@woowacourse/mission-utils";
import inputHandler from "./inputHandler.js";

class LottoPlayer {
  async play() {
    try {
      const purchaseAmount = await inputHandler.requestPurchaseAmount();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.play();
    }
  }
}

export default LottoPlayer;
