class LottoMatchChecker {
  #winningNumbers;
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.#bonusNumber = bonusNumber;
    this.#winningNumbers = winningNumbers;
  }

  countMatchesIn(lotto) {
    let matchCount = 0;

    this.#winningNumbers.forEach((winningNumber) => {
      if (lotto.contains(winningNumber)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  isBonusNumberIn(lotto) {}
}
