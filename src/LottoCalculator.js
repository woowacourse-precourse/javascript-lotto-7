import { LOTTO_MATCH_TABLE } from './constant.js';

/**
 *
 */
class LottoCalculator {
  /**
   *
   */
  calculateLotto(lotto, winningNumbers, winningBonusNumber) {
    const matchCount = this.#calcuateNumberMatchCount(lotto, winningNumbers);
    const rank = this.#calcuateRank(matchCount, winningBonusNumber);
    return rank;
  }

  /**
   *
   */
  #calcuateNumberMatchCount(lotto, winningNumbers) {
    let matchCount = 0;
    lotto.getNumbers().forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  /**
   *
   */
  #calcuateRank(matchCount, winningBonusNumber) {
    let rank = LOTTO_MATCH_TABLE[matchCount];
    if (matchCount === 5 && lotto.getNumbers().includes(winningBonusNumber)) {
      rank = 2;
    }

    return rank;
  }
}

export default LottoCalculator;
