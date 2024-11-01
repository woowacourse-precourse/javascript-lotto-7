import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/output.js";

class LottoMachine {
  constructor(cost) {
    this.lottoQuantity = cost / 1000;
  }

  printQuantity() {
    Console.print(`${this.lottoQuantity}${OUTPUT_MESSAGE.QUANTITY}`);
  }
}

export default LottoMachine;
