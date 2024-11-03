import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class LottoGenerator {
  constructor() {
    this.lottos = [];
  }

  setGeneratedLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      lottos.push(new Lotto(numbers));
    }
  }

  getGeneratedLottos() {
    return this.lottos;
  }
}

export default LottoGenerator;
