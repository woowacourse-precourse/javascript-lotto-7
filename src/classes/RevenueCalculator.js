import LottoChecker from './LottoChecker.js';

class RevenueCalculator {
  constructor(totalSpent, winningResults) {
    this.totalSpent = totalSpent;
    this.totalPrize = 0;
    this.winningResults = winningResults;
  }

  calculateYield() {
    this.calculateTotalPrize();
    return (this.totalPrize / this.totalSpent) * 100;
  }

  calculateTotalPrize() {
    this.totalPrize = this.winningResults.reduce((total, count, index) => {
      const prize = LottoChecker.PRIZE_TIERS[index].prize;
      return total + count * prize;
    }, 0);
  }
}

export default RevenueCalculator;
