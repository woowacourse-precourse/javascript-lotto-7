import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";

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
      5.5: 0, // 보너스 번호 포함한 5개 일치
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
}

export default LottoService;
