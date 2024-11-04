import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import { WINNING_PRIZE } from "../utils/constants.js";

class LottoService {
  generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    return new Lotto(numbers);
  }

  calculateResults(lottos, winningNumbers, bonusNumber) {
    const result = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };

    lottos.forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((num) => winningNumbers.includes(num)).length;
      const isBonusMatch = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) result[6]++;
      else if (matchCount === 5 && isBonusMatch) result[5.5]++;
      else if (matchCount === 5) result[5]++;
      else if (matchCount === 4) result[4]++;
      else if (matchCount === 3) result[3]++;
    });

    return result;
  }

  calculateTotalPrize(results) {
    const totalPrize =
      results[3] * WINNING_PRIZE[3] +
      results[4] * WINNING_PRIZE[4] +
      results[5] * WINNING_PRIZE[5] +
      results[5.5] * WINNING_PRIZE.bonusMatch +
      results[6] * WINNING_PRIZE[6];

    return totalPrize;
  }
}

export default LottoService;
