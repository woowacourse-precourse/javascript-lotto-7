import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/lotto.js';
import Lotto from '../Lotto.js';

class LottoService {
  createLottos(count) {
    return Array.from({ length: count }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_CONFIG.MIN_NUMBER,
        LOTTO_CONFIG.MAX_NUMBER,
        LOTTO_CONFIG.NUMBERS_PER
      );
      return new Lotto(numbers);
    });
  }

  calculateResults(lottos, winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, BONUS: 0, 6: 0 };

    lottos.forEach((lotto) => {
      const matchCount = lotto.match(winningNumbers);
      this.#updateResults(results, matchCount, lotto, bonusNumber);
    });

    return results;
  }

  #updateResults(results, matchCount, lotto, bonusNumber) {
    if (matchCount === 6) {
      results[6]++;
    } else if (matchCount === 5 && lotto.includes(bonusNumber)) {
      results.BONUS++;
    } else if (matchCount >= 3) {
      results[matchCount]++;
    }
  }

  calculateEarningRate(purchaseAmount, results) {
    const totalPrize = Object.entries(results).reduce((sum, [rank, count]) => {
      return sum + LOTTO_CONFIG.PRIZE[rank] * count;
    }, 0);

    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoService;
