class LottoCalculate {
  constructor(earnings) {
    this.earnings = earnings;
  }

  calculateTotalEarnings(statistics) {
    return Object.entries(statistics).reduce((total, [key, count]) => {
      if (key !== '5') {
        return total + count * this.earnings[key];
      }

      if (typeof count === 'object') {
        total += count.count * this.earnings[key].normal;

        if (count.bonus > 0) {
          total += count.bonus * this.earnings[key].bonus;
        }
      }

      return total;
    }, 0);
  }

  formatRate(rate) {
    const roundedRate = Math.round(rate * 100) / 100;
    return `${roundedRate.toLocaleString(undefined, { minimumFractionDigits: 1 })}`;
  }

  calculateRate(statistics, totalSpent) {
    const totalEarnings = this.calculateTotalEarnings(statistics);
    const returnRate = ((totalEarnings / totalSpent) * 100).toFixed(1);

    return returnRate.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default LottoCalculate;
