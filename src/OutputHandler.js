import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
  static async output(message) {
    Console.print(message);
  }
  static async staticOutput(matchNum, winners, message) {
    Console.print(matchNum + message + winners);
  }
}

export default OutputHandler;
