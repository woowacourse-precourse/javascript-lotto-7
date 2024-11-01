import { Console } from "@woowacourse/mission-utils";

class LottoIO {
  static getUserInput(message) {
    return Console.readLineAsync(message);
  }

  static print(message) {
    Console.print(message);
  }
}

export default LottoIO;
