import { Console } from "@woowacourse/mission-utils";
import { VIEWS_MESSAGE } from "../constants/Message.js";

export default class InputView {
  static async readInputMoney() {
    const inputMoney = await Console.readLineAsync(
      VIEWS_MESSAGE.PRINT_INPUT_MONEY + "\n"
    );

    return inputMoney;
  }

  static async readWinningNumber() {
    return await Console.readLineAsync("당첨 번호를 입력해주세요" + "\n");
  }
}
