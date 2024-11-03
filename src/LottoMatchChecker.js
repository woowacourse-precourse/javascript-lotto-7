class LottoMatchChecker {
  #winningNumbers;
  #bonusNumber;
  // validate는 어떻게,, 코드 중복줄이려면 상속?
  constructor(bonusNumber, winningNumbers) {
    this.#bonusNumber = bonusNumber;
    this.#winningNumbers = winningNumbers;
  }
  // 코드 줄여보기
  countMatchesIn(lotto) {
    let matchCount = 0;

    this.#winningNumbers.forEach((winningNumber) => {
      if (lotto.contains(winningNumber)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  isBonusNumberIn(lotto) {
    return lotto.contains(this.#bonusNumber);
  }
}

export default LottoMatchChecker;
