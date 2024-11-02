import { Console } from "@woowacourse/mission-utils";
import { HELPER_MESSAGE } from "../constants/helperMessages.js";

export class InputHandler {
  static async getPrice() {
    return await Console.readLineAsync(HELPER_MESSAGE.getPrice);
  }
}
