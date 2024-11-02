import { Console } from "@woowacourse/mission-utils";
import Validator from "./utils/Validator.js";

class App {
  async run() {
    const validator = new Validator();
    const purchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    validator.validatePurchaseAmount(purchaseAmount);
  }
}

export default App;
