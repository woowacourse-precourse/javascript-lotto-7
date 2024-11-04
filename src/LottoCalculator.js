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
    if (matchCount === 6) {
      return 1;
    } else if (
      matchCount === 5 &&
      lotto.getNumbers().includes(winningBonusNumber)
    ) {
      return 2;
    } else if (matchCount === 5) {
      return 3;
    } else if (matchCount === 4) {
      return 4;
    } else if (matchCount === 3) {
      return 5;
    }

    return 0;
  }
}

export default LottoCalculator;
