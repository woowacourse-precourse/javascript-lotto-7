import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import { Console } from '@woowacourse/mission-utils';
import {
  FIFTH_PRIZE,
  FIRST_PRIZE,
  FOURTH_PRIZE,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
  MATCH_COUNT_FIFTH_PRIZE,
  MATCH_COUNT_FOURTH_PRIZE,
  MATCH_COUNT_FIRST_PRIZE,
  MATCH_COUNT_SECOND_PRIZE,
  SECOND_PRIZE,
  THIRD_PRIZE,
  BONUS_MATCH_COUNT,
} from '../constants/constraints.js';

class LottoService {
  getGeneratedLottos(lottoAmount) {
    return Array.from({ length: lottoAmount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_MIN_NUMBER,
        LOTTO_MAX_NUMBER,
        LOTTO_NUMBERS_LENGTH,
      );
      return new Lotto(numbers);
    });
  }

  caculatePrize(matchCount, isBonusNumberMatched) {
    const prizeCriteria = {
      [MATCH_COUNT_FIRST_PRIZE]: () => FIRST_PRIZE,
      [MATCH_COUNT_SECOND_PRIZE]: () => {
        if (isBonusNumberMatched) {
          return SECOND_PRIZE;
        }
        return THIRD_PRIZE;
      },
      [MATCH_COUNT_FOURTH_PRIZE]: () => FOURTH_PRIZE,
      [MATCH_COUNT_FIFTH_PRIZE]: () => FIFTH_PRIZE,
    };

    const prizeAmount = prizeCriteria[matchCount];
    if (!prizeAmount) {
      return 0;
    }

    return prizeAmount();
  }

  calculateLottoResults(lottos, winningNumbers, bonusNumber) {
    const matchCounts = {
      [MATCH_COUNT_FIFTH_PRIZE]: 0,
      [MATCH_COUNT_FOURTH_PRIZE]: 0,
      [MATCH_COUNT_SECOND_PRIZE]: 0,
      [MATCH_COUNT_FIRST_PRIZE]: 0,
      [BONUS_MATCH_COUNT]: 0,
    };
    const incrementMatchCount = (key) => matchCounts[key]++;
    const bonusHandlers = {
      true: () => incrementMatchCount('bonus'),
      false: () => incrementMatchCount(5),
    };

    const updateMatchCount = (matchCount, isBonusNumberMatched) => {
      const prize = {
        [MATCH_COUNT_FIFTH_PRIZE]: () =>
          incrementMatchCount(MATCH_COUNT_FIFTH_PRIZE),
        [MATCH_COUNT_FOURTH_PRIZE]: () =>
          incrementMatchCount(MATCH_COUNT_FOURTH_PRIZE),
        [MATCH_COUNT_SECOND_PRIZE]: () => bonusHandlers[isBonusNumberMatched](),
        [MATCH_COUNT_FIRST_PRIZE]: () =>
          incrementMatchCount(MATCH_COUNT_FIRST_PRIZE),
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
