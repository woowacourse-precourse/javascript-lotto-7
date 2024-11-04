import { Console } from "@woowacourse/mission-utils";

export const IOUtils = {
  async input(message) {
    return await Console.readLineAsync(message);
  },
  output: (message) => {
    Console.print(message);
  },
  newLine: () => {
    Console.print("");
  },
};
