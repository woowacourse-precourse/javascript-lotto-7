class LottoChecker {
  #winningResult;

  constructor() {
    this.#winningResult = {
      3: { prize: 5000, count: 0 },
      4: { prize: 50000, count: 0 },
      5: { prize: 1500000, count: 0 },
      5.5: { prize: 30000000, count: 0 },
      6: { prize: 2000000000, count: 0 },
    };
  }

  checkWinning(lottos, winningNumber, bonusNumber) {
    lottos.forEach((lotto) => {
      const matchCount = this.#countMatches(lotto.getNumbers(), winningNumber);
      this.#countPrize(matchCount, lotto.getNumbers(), bonusNumber);
    });
    return this.#winningResult;
  }

  #countMatches(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  #countPrize(matchCount, lottoNumbers, bonusNumber) {
    if (matchCount === 5 && lottoNumbers.includes(bonusNumber)) {
      this.#winningResult[5.5].count += 1;
      return;
    }

    if (this.#winningResult[matchCount]) {
      this.#winningResult[matchCount].count += 1;
    }
  }

  calculateTotalPrize() {
    return Object.values(this.#winningResult).reduce(
      (total, { prize, count }) => total + prize * count,
      0
    );
  }
}

export default LottoChecker;
