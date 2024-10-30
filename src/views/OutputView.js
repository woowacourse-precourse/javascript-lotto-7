import { Console } from "@woowacourse/mission-utils";

export class OutputView {
  static error(message) {
    return Console.print(message);
  }
}
