import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
} from '../constants/constraints.js';
import { calculatePrize } from '../utils/prizeUtils.js';
import {
  initializeMatchCounts,
  updateMatchCount,
} from '../utils/matchUtils.js';
import { isBonusNumberInList } from '../utils/validatorUtils.js';

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

  calculateLottoResults(lottos, winningNumbers, bonusNumber) {
    const matchCounts = initializeMatchCounts();
    const totalEarnings = lottos.reduce((total, lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchCount = this.getMatchCounts(lottoNumbers, winningNumbers);
      const isBonusNumberMatched = isBonusNumberInList(
        lottoNumbers,
        bonusNumber,
      );
      updateMatchCount(matchCounts, matchCount, isBonusNumberMatched);
      return total + calculatePrize(matchCount, isBonusNumberMatched);
    }, 0);

    return { matchCounts, totalEarnings };
  }

  getMatchCounts(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  }
}
export default LottoService;
