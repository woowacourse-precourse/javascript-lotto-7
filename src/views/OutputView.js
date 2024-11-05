import { Console } from "@woowacourse/mission-utils";
import {
  MESSAGE,
  SEPARATOR,
  STATISTICS_MESSAGE,
  WHITE_SPACE,
} from "../constants/Constants.js";

export class OutputView {
  static error(message) {
    return Console.print(message);
  }

  static purchaseResult(money) {
    return Console.print(MESSAGE.PURCHASE_RESULT(money));
  }

  static lottoNumber(numbers) {
    return Console.print(
      MESSAGE.LOTTO_NUMBER(numbers.join(SEPARATOR + WHITE_SPACE))
    );
  }

  static statistics(statistics) {
    statistics.forEach((message) => {
      Console.print(message);
    });
    return;
  }

  static returnRate(returnRate) {
    return Console.print(STATISTICS_MESSAGE.RETURN_RATE(returnRate));
  }
}
