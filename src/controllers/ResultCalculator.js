class ResultCalculator {
  #winningNumbers;

  #lottos;

  #bonusNumber;

  #prizeCounts = {
    3: 0,
    4: 0,
    5: 0,
    '5Bonus': 0,
    6: 0,
  };

  #prizeMoney = {
    3: 5000,
    4: 50000,
    5: 1500000,
    '5Bonus': 30000000,
    6: 2000000000,
  };

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculateResults() {
    this.#lottos.forEach((lotto) => {
      const matchedCount = this.getMatchingCount(lotto);

      if (matchedCount) this.#prizeCounts[matchedCount] += 1;
    });
  }

  getMatchingCount(lottoNumbers) {
    const matchingCount = lottoNumbers.filter((number) =>
      this.#winningNumbers.includes(number),
    ).length;
    const isBonusMatched = lottoNumbers.includes(this.#bonusNumber);

    if (matchingCount === 6) return 6;
    if (matchingCount === 5 && isBonusMatched) return '5Bonus';
    if (matchingCount === 5) return 5;
    if (matchingCount === 4) return 4;
    if (matchingCount === 3) return 3;

    return null;
  }

  calculateTotalPrize() {
    return Object.entries(this.#prizeCounts).reduce(
      (totalPrize, [key, count]) => totalPrize + this.#prizeMoney[key] * count,
      0,
    );
  }

  calculateROI() {
    const purchaseAmount = this.#lottos.length * 1000;
    const totalPrize = this.calculateTotalPrize();
    const ROI = (totalPrize / purchaseAmount) * 100;

    return ROI.toFixed(1);
  }
}

export default ResultCalculator;
