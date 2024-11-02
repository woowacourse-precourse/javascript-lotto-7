import { MissionUtils } from "@woowacourse/mission-utils";
import { viewMessages } from "../constant/message.js";

export class InputHandler {
  async readNumber() {
    return await MissionUtils.Console.readLineAsync(viewMessages.price);
  }
}
