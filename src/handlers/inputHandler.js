import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "../config/config.js";

export const inputHandler = async (message) => {
  Console.print(message);

  const input = await Console.readLineAsync("");
  return input;
};
