class LottoCalculate {
  constructor(earnings) {
    this.earnings = earnings;
  }

  calculateTotalEarnings(statistics) {
    return Object.entries(statistics).reduce((total, [key, count]) => {
      if (key === '5' && typeof count === 'object') {
        return total + count.bonus * this.earnings[key].bonus;
      }
      return total + count * this.earnings[key];
    }, 0);
  }

  formatRate(rate) {
    const roundedRate = Math.round(rate * 100) / 100;
    return `${roundedRate.toLocaleString(undefined, { minimumFractionDigits: 1 })}%`;
  }

  calculateRate(statistics, totalSpent) {
    const totalEarnings = this.calculateTotalEarnings(statistics);
    const returnRate = (totalEarnings / totalSpent) * 100;
    return this.formatRate(returnRate);
  }
}

export default LottoCalculate;
