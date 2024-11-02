import { MissionUtils } from "@woowacourse/mission-utils";
import { inValidMessages } from "../constant/message.js";

export class InputHandler {
  async readNumber(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    this.#validate(input);
    return input;
  }

  #validate(input) {
    this.#isEmpty(input);
    this.#isNumber(input);
  }

  #isEmpty(input) {
    if (input.trim() === '') throw new Error(inValidMessages.empty);
  }

  #isNumber(input) {
    if (isNaN(input)) throw new Error(inValidMessages.NaN);
  }
}
