import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../messeges.js";

class InputView {
  static async getPurchaseAmount() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(INPUT_MESSAGES.MONEY_INPUT, (input) => {
        resolve(Number(input));
      });
    });
  }
}

export default InputView;
