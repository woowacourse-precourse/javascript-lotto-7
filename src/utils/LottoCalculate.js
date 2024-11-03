class LottoCalculate {
  calculateTotalEarnings(statistics, earnings) {
    let totalEarnings = 0;
    Object.entries(statistics).forEach(([key, count]) => {
      if (key === '5' && typeof count === 'object') {
        totalEarnings += count.bonus * earnings[key].bonus;
      } else {
        totalEarnings += count * earnings[key];
      }
    });
    return totalEarnings;
  }

  calculateReturnRate(totalEarnings, totalSpent) {
    return ((totalEarnings / totalSpent) * 100).toFixed(2);
  }
}

export default LottoCalculate;
