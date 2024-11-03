import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants.js";


class OutputView {
  #print

  constructor() {
    this.#print = Console.print;
  }

  printMyLotto(purchaseNumber) {
    this.#print(OUTPUT_MESSAGE.printPurchaseNumber(purchaseNumber));
  }

  printResult() {
    this.#print(OUTPUT_MESSAGE.printWinningStatistics);
    this.#print(OUTPUT_MESSAGE.printFifth(0));
    this.#print(OUTPUT_MESSAGE.printFourth(0));
    this.#print(OUTPUT_MESSAGE.printThird(0));
    this.#print(OUTPUT_MESSAGE.printSecond(0));
    this.#print(OUTPUT_MESSAGE.printFirst(0));
    this.#print(OUTPUT_MESSAGE.printRateReturn(0));
  }
}

export default OutputView;