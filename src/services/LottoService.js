import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class LottoService {
  getGeneratedLottos(lottoAmount) {
    return Array.from({ length: lottoAmount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }

  caculatePrize(matchCount, isBonusNumberMatched) {
    const prizeCriteria = {
      6: () => 2000000000,
      5: () => {
        if (isBonusNumberMatched) {
          return 30000000;
        }
        return 1500000;
      },
      4: () => 50000,
      3: () => 5000,
    };

    const prizeAmount = prizeCriteria[matchCount];
    if (!prizeAmount) {
      return 0;
    }

    return prizeAmount();
  }

  calculateLottoResults(lottos, winningNumbers, bonusNumber) {
    const matchCounts = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
    };
    const incrementMatchCount = (key) => matchCounts[key]++;
    const bonusHandlers = {
      true: () => incrementMatchCount('bonus'),
      false: () => incrementMatchCount(5),
    };

    const updateMatchCount = (matchCount, isBonusNumberMatched) => {
      const prize = {
        3: () => incrementMatchCount(3),
        4: () => incrementMatchCount(4),
        5: () => bonusHandlers[isBonusNumberMatched](),
        6: () => incrementMatchCount(6),
      };

      const updateMatchCount = prize[matchCount];
      updateMatchCount && updateMatchCount();
    };
    const totalEarnings = lottos.reduce((total, lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchCount = this.getMatchCounts(lottoNumbers, winningNumbers);
      const isBonusNumberMatched = lottoNumbers.includes(bonusNumber);

      updateMatchCount(matchCount, isBonusNumberMatched);

      return total + this.caculatePrize(matchCount, isBonusNumberMatched);
    }, 0);

    return { matchCounts, totalEarnings };
  }

  getMatchCounts(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  }
}
export default LottoService;
