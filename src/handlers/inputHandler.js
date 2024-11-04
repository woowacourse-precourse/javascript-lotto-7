import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "../config/config.js";

export const inputHandler = async (message) => {
  Console.print(message);

  const input = await Console.readLineAsync("");

  if (input === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }

  return input;
};
