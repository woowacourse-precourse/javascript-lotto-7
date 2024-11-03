import { Console } from "@woowacourse/mission-utils";

class LottoIO {
  static getUserInput(query) {
    return Console.readLineAsync(query);
  }

  static print(message) {
    Console.print(message);
  }

  static throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default LottoIO;
