import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import { Console } from '@woowacourse/mission-utils';
import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
  LOTTO_PRIZES,
  MATCH_COUNTS_BY_RANK,
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
      [MATCH_COUNTS_BY_RANK.FIRST]: () => LOTTO_PRIZES.FIRST,
      [MATCH_COUNTS_BY_RANK.SECOND]: () => {
        if (isBonusNumberMatched) {
          return LOTTO_PRIZES.SECOND;
        }
        return LOTTO_PRIZES.THIRD;
      },
      [MATCH_COUNTS_BY_RANK.FOURTH]: () => LOTTO_PRIZES.FOURTH,
      [MATCH_COUNTS_BY_RANK.FIFTH]: () => LOTTO_PRIZES.FIFTH,
    };

    const prizeAmount = prizeCriteria[matchCount];
    if (!prizeAmount) {
      return 0;
    }

    return prizeAmount();
  }

  calculateLottoResults(lottos, winningNumbers, bonusNumber) {
    const matchCounts = {
      [MATCH_COUNTS_BY_RANK.FIRST]: 0,
      [MATCH_COUNTS_BY_RANK.SECOND]: 0,
      [MATCH_COUNTS_BY_RANK.THIRD]: 0,
      [MATCH_COUNTS_BY_RANK.FOURTH]: 0,
      [MATCH_COUNTS_BY_RANK.FIFTH]: 0,
    };
    const incrementMatchCount = (key) => matchCounts[key]++;
    const bonusHandlers = {
      true: () => incrementMatchCount(MATCH_COUNTS_BY_RANK.THIRD),
      false: () => incrementMatchCount(MATCH_COUNTS_BY_RANK.SECOND),
    };

    const updateMatchCount = (matchCount, isBonusNumberMatched) => {
      const prize = {
        [MATCH_COUNTS_BY_RANK.FIRST]: () =>
          incrementMatchCount(MATCH_COUNTS_BY_RANK.FIRST),
        [MATCH_COUNTS_BY_RANK.SECOND]: () =>
          bonusHandlers[isBonusNumberMatched](),
        [MATCH_COUNTS_BY_RANK.FOURTH]: () =>
          incrementMatchCount(MATCH_COUNTS_BY_RANK.FOURTH),
        [MATCH_COUNTS_BY_RANK.FIFTH]: () =>
          incrementMatchCount(MATCH_COUNTS_BY_RANK.FIFTH),
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
