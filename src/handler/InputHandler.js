import { MissionUtils } from "@woowacourse/mission-utils";
import { inValidMessages } from "../constant/message.js";
import { SPLIT_CHAR } from "../constant/constants.js";

export class InputHandler {
  async readNumbers(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    const splitNumbers = input.split(SPLIT_CHAR).map((number) => Number(number.trim()));
    this.#validateNumbers(splitNumbers);
    return splitNumbers;
  }

  async readNumber(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    const number = Number(input);
    this.#validateNumber(number);
    return number;
  }

  #validateNumbers(numbers) {
    numbers.forEach((number) => this.#validateNumber(number));
  }

  #validateNumber(input) {
    if (isNaN(input)) throw new Error(inValidMessages.NaN);
    if (!Number.isInteger(Number(input))) {
      throw new Error(inValidMessages.integer);
    }
  }
}
