import { Console } from "@woowacourse/mission-utils";

const getInput = (helperMessages) => {
  return Console.readLineAsync(helperMessages);
};

const printOneLine = (message) => {
  Console.print(message);
};

export { getInput, printOneLine };
