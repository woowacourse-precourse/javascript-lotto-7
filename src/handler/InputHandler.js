import { MissionUtils } from "@woowacourse/mission-utils";
import { inValidMessages, viewMessages } from "../constant/message.js";

export class InputHandler {
  async readNumber() {
    const input = await MissionUtils.Console.readLineAsync(viewMessages.price);
    this.#validate(input);
    return input;
  }

  #validate(input) {
    this.#isNumber(input);
  }

  #isNumber(input) {
    if (isNaN(input)) throw new Error(inValidMessages.NaN);
  }
}
