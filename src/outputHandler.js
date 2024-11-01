import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/output.js";

class OutputHandler {
  static print(cost) {
    const quantity = cost / 1000;
    Console.print(`${quantity}${OUTPUT_MESSAGE.QUANTITY}`);
  }
}

export default OutputHandler;
