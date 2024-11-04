class LottoCalculator {
  #winningStatistics;
  #profitRate;

  static #WINNING_PRIZES = {
    '1st': 2000000000,
    '2nd': 30000000,
    '3rd': 1500000,
    '4th': 50000,
    '5th': 5000,
  };

  constructor() {
    this.#winningStatistics = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    };
    this.#profitRate = 0;
  }

  #determineRank(winningNumbers, hasBonus) {
    switch (winningNumbers.length) {
      case 6:
        return '1st';
      case 5:
        if (hasBonus) {
          return '2nd';
        }
        return '3rd';
      case 4:
        return '4th';
      case 3:
        return '5th';
      default:
        return null;
    }
  }

  #calculateWinningMoney() {
    const winningMoney = Object.entries(this.#winningStatistics).reduce(
      (total, [rate, count]) =>
        total + count * LottoCalculator.#WINNING_PRIZES[rate],
      0,
    );

    return winningMoney;
  }

  #calculateProfitRate(purchaseAmount) {
    const winningMoney = this.#calculateWinningMoney();
    this.#profitRate = (winningMoney / purchaseAmount) * 100;
  }

  #updateWinningStatistics(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const winningList = winningNumbers.filter((number) =>
        lotto.includes(number),
      );
      const hasBonus = lotto.includes(bonusNumber);

      const rank = this.#determineRank(winningList, hasBonus);

      if (rank) {
        this.#winningStatistics[rank] += 1;
      }
    });
  }

  getResult(purchaseAmount, lottos, winningNumbers, bonusNumber) {
    this.#updateWinningStatistics(lottos, winningNumbers, bonusNumber);
    this.#calculateProfitRate(purchaseAmount);

    const result = {
      winningStatistics: this.#winningStatistics,
      profitRate: this.#profitRate,
    };

    return result;
  }
}

export default LottoCalculator;
