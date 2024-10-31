import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, RANKING_TOTAL } from "../constants/Constants.js";

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

  static statistics() {
    return Console.print(MESSAGE.STATISTICS());
  }

  static returnRate(returnRate) {
    return Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}
