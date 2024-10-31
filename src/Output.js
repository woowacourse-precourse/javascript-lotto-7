import { Console } from "@woowacourse/mission-utils";
import { PURCHASE_MESSAGE } from "./Constants";

class Output {
  constructor(purchasedLottos, winningAndBonusNumber, totalLottoCount) {
    this.sortedPurchasedLottos = this.#sortLottoNumbers(purchasedLottos);
    this.winningAndBonusNumber = winningAndBonusNumber;
    this.totalLottoCount = totalLottoCount;
  }

  #sortLottoNumbers(purchasedLottos) {
    return purchasedLottos.map((lotto) => {
      return lotto.sort((a, b) => a - b);
    });
  }

  printSortedLottoNumbers() {
    Console.print(`${this.totalLottoCount}${PURCHASE_MESSAGE}`);
    this.sortedPurchasedLottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }
}

export default Output;
