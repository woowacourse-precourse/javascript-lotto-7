import LottoChecker from './LottoChecker.js';

class RevenueCalculator {
  constructor(totalSpent, winningResults) {
    this.totalSpent = totalSpent;
    this.totalPrize = 0;
    this.winningResults = winningResults;
  }

  calculateYield(totalSpent, winningResults) {
    const totalPrize = this.#calculateTotalPrize(winningResults);

    return (totalPrize / totalSpent) * 100;
  }

  #calculateTotalPrize(winningResults) {
    const totalPrize = winningResults.reduce((total, count, index) => {
      const prize = LottoChecker.PRIZE_TIERS[index].prize;

      return total + count * prize;
    }, 0);

    return totalPrize;
  }
}

export default RevenueCalculator;
