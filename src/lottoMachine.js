import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/output.js";
import Lotto from "./Lotto.js";

class LottoMachine {
  constructor(cost) {
    this.lottoQuantity = cost / 1000;
    this.lottos = this.generateLottos();
  }

  printQuantity() {
    Console.print(`${this.lottoQuantity}${OUTPUT_MESSAGE.QUANTITY}`);
  }

  generateLottos() {
    const lottos = [];
    for (let i = 0; i < this.lottoQuantity; i++) {
      lottos.push(Lotto.generateRandomNumbers().sort((a, b) => a - b));
    }
    return lottos;
  }
}

export default LottoMachine;
