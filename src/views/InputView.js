import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Constants.js";

export class InputView {
  static winningNumber() {
    return Console.readLineAsync(MESSAGE.WINNING_NUMBER_INPUT);
  }

  static winningBonusNumber() {
    return Console.readLineAsync(MESSAGE.WINNING_BONUS_NUMBER_INPUT);
  }
}
