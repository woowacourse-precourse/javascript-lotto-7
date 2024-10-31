import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Constants.js";

export class OutputView {
  static error(message) {
    return Console.print(message);
  }

  static purchaseResult(money) {
    return Console.print(money + MESSAGE.PURCHASE_RESULT);
  }

  static lottoNumber(numbers) {
    return Console.print("[" + numbers.join(", ") + "]");
  }
}
