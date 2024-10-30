// import Lotto from "./Lotto";
import { MissionUtils } from "@woowacourse/mission-utils"
import PurchaseAmount from "./PurchaseAmount.js";


class App {
  async run() {
    const INPUT_AMOUNT = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseAmount = new PurchaseAmount(INPUT_AMOUNT);
    purchaseAmount.getLottoCount();
  }
}

export default App;
