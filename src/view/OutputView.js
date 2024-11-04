import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants.js";

class OutputView {
  #print;

  constructor() {
    this.#print = Console.print;
  }

  printMyLotto(purchaseNumber, myLottos) {
    this.#print(OUTPUT_MESSAGE.printPurchaseNumber(purchaseNumber));

    for (let element of myLottos) {
      this.#print(element.getNumbers());
    }
  }

  printResult(match, rate) {
    this.#print(OUTPUT_MESSAGE.printWinningStatistics);
    this.#print(OUTPUT_MESSAGE.printFifth(match[0]));
    this.#print(OUTPUT_MESSAGE.printFourth(match[1]));
    this.#print(OUTPUT_MESSAGE.printThird(match[2]));
    this.#print(OUTPUT_MESSAGE.printSecond(match[3]));
    this.#print(OUTPUT_MESSAGE.printFirst(match[4]));
    this.#print(OUTPUT_MESSAGE.printRateReturn(rate));
  }
}

export default OutputView;