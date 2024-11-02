import LottoChecker from './LottoChecker.js';

class RevenueCalculator {
  calculateYield(totalSpent, winningResults) {
    const totalPrize = this.#calculateTotalPrize(winningResults);

    const yield = (totalPrize / totalSpent) * 100;
    return parseFloat(yield.toFixed(2));
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
