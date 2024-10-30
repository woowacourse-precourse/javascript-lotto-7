import { MissionUtils } from "@woowacourse/mission-utils";
import { purchaseError } from "./utils/validator.js";
class App {
  async run() {
    try {
      const lottoPurchaseInput = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
      purchaseError(lottoPurchaseInput);
      const lottoQuantity = lottoPurchaseInput / 1000;
      MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.\n`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
