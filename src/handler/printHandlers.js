import { Console } from "@woowacourse/mission-utils";

const printError = (msg) => {
  Console.print("[ERROR]" + msg);
  throw new Error("[ERROR]");
};

const printParam = (msg) => {
  Console.print(msg);
};

export { printError, printParam };
