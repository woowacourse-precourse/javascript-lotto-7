import Money from "./models/money.js";
import InputView from "./InputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoController {
  async run() {
    try {
      const purchaseAmount = await InputView.getPurchaseAmount();
      const money = new Money(purchaseAmount);
      const lottoCount = money.calculateLottoCount();
      MissionUtils.Console.print(`${lottoCount}개 구매했습니다.`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default LottoController;
