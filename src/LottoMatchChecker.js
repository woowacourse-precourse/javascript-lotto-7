class LottoMatchChecker {
  countMatches(winningNumbers, lotto) {
    let matchCount = 0;

    winningNumbers.forEach((winningNumber) => {
      if (lotto.contains(winningNumber)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  hasBonusNumber(bonusNumber, lotto) {
    return lotto.contains(bonusNumber);
  }
}

export default LottoMatchChecker;
