import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoManager {
  constructor() {
    this.lottos = [];
  }

  generateLottos(count) {
    this.lottos = Array.from({ length: count }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
    return this.lottos;
  }

  calculateResults(winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, "5_bonus": 0, 6: 0 };
    this.lottos.forEach((lotto) => {
      const matchCount = lotto.getNumbers().filter((num) => winningNumbers.includes(num)).length;
      const isBonusMatch = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) {
        results[6]++;
      } else if (matchCount === 5 && isBonusMatch) {
        results["5_bonus"]++;
      } else if (matchCount === 5) {
        results[5]++;
      } else if (matchCount === 4) {
        results[4]++;
      } else if (matchCount === 3) {
        results[3]++;
      }
    });
    return results;
  }
}

export default LottoManager;
