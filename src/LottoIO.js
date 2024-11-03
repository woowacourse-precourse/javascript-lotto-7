import { Console } from "@woowacourse/mission-utils";

export class LottoIO {
  static getUserInput(message) {
    return Console.readLineAsync(message);
  }

  static print(message) {
    Console.print(message);
  }

  static throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}
