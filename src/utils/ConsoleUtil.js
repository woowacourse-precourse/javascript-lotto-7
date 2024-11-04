import { Console } from "@woowacourse/mission-utils";

const ConsoleUtil = {
  print(message) {
    Console.print(message);
  },
  async readLine(prompt) {
    return await Console.readLineAsync(prompt);
  },
};

export default ConsoleUtil;
