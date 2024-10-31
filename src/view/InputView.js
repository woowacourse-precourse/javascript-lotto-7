import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constant/messages.js";

class InputView {
  async readLottoAmount() {
    return Console.readLineAsync(MESSAGES.INPUT.LOTTO_AMOUNT);
  }
  async readWinningLottoNumbers() {
    return Console.readLineAsync(MESSAGES.INPUT.WINNING_NUMBERS);
  }
  async readBonusNumbers() {
    return Console.readLineAsync(MESSAGES.INPUT.BONUS_NUMBER);
  }
}

export default InputView;
