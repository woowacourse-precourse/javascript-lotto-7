import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEWS_MESSAGE } from "../constants/Message.js";

export default class InputView {
  static async readInputMoney() {
    const inputMoney = await Console.readLineAsync(
      INPUT_VIEWS_MESSAGE.PRINT_INPUT_MONEY
    );

    return inputMoney;
  }

  static async readWinningNumber() {
    return await Console.readLineAsync(
      INPUT_VIEWS_MESSAGE.PRINT_INPUT_WINNING_NUMBER
    );
  }

  static async readBounsNumber() {
    return await Console.readLineAsync(
      INPUT_VIEWS_MESSAGE.PRINT_INPUT_BONUS_NUMBER
    );
  }
}
