import { Console } from "@woowacourse/mission-utils";

const ConsoleUtil = {
    print(message) {
      Console.print(message);
    },
    readLine(prompt, callback) {
      Console.readLine(prompt, callback);
    },
    close() {
      Console.close();
    },
  };
  
  module.exports = ConsoleUtil;