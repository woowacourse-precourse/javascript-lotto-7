import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator";

class ConsoleView {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync("");
    Validator.validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }
}

export default ConsoleView;