import Lotto from "./Lotto";
import { Random } from "@woowacourse/mission-utils";
import ResultCalculator from "./ResultCalculator";

class LottoManager {
  constructor(purchaseAmount) {
    this.lottos = this.generateLottos(purchaseAmount / 1000);
  }

  generateLottos(count) {
    return Array.from({ length: count }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      return new Lotto(numbers);
    });
  }

  getLottos() {
    return this.lottos;
  }

  calculateResults(winningNumbers, bonusNumber) {
    const resultCalculator = new ResultCalculator(this.lottos, winningNumbers, bonusNumber);
    return resultCalculator.getResults();
  }
}

export default LottoManager;
