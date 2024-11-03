import InputView from "../views/InputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoController {
  async run() {
    try {
      const lottoCount = await InputView.getPurchaseAmount();
      MissionUtils.Console.print(`${lottoCount}개 구매했습니다.`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default LottoController;
