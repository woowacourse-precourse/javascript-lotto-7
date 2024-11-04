const { Console } = require("@woowacourse/mission-utils");

const ConsoleUtil = {
  print(message) {
    Console.print(message);
  },
  async readLine(prompt) {
    return await Console.readLineAsync(prompt);
  },
  close() {
    Console.close();
  },
};

module.exports = ConsoleUtil;
