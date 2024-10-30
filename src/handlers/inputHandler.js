import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../config/config.js";

export const inputHandler = async (message) => {
  console.log(message);
  const input = await Console.readLineAsync("");

  if (input === "") {
    throw new Error(MESSAGES.ERROR_INPUT_EMPTY);
  }

  return input;
};
