import { Random } from "@woowacourse/mission-utils";

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
    }
  }

  getLottos() {
    return this.lottos;
  }
}

export default LottoGenerator;
