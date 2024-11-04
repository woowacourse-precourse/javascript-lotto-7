import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "../config/config.js";

export const outputHandler = (result) => {
  if (result === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }

  Console.print(`${result}`);
};
