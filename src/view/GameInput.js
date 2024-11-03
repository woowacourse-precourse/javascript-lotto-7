import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/Message.js";

class GameInput {
  async readAmount() {
    return Console.readLineAsync(MESSAGE.INPUT.PURCHASE_MONEY);
  }

  async readWinningLotto() {
    return Console.readLineAsync(MESSAGE.INPUT.WINNING_LOTTO);
  }

  async readBonusNumber() {
    return Console.readLineAsync(MESSAGE.INPUT.BONUS_NUMBER);
  }
}

export default GameInput;
