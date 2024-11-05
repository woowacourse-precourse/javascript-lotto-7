import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Constants.js";

export class InputView {
  static winningNumber() {
    return Console.readLineAsync(MESSAGE.WINNING_NUMBER_INPUT);
  }

  static bonusNumber() {
    return Console.readLineAsync(MESSAGE.BONUS_NUMBER_INPUT);
  }

  static purchaseAmount() {
    return Console.readLineAsync(MESSAGE.PURCHASE_AMOUNT_INPUT);
  }
}
