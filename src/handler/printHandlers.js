import { Console } from "@woowacourse/mission-utils";

const printError = (msg) => {
  Console.print(msg);
  throw new Error("[ERROR]");
};

export { printError };
