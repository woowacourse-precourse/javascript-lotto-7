import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  constructor() {
    this.lottos = [];
  }

  generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.lottos.push(numbers);
      console.log(this.lottos);
    }
  }

  getLottos() {
    return this.lottos;
  }
}

export default LottoGenerator;
