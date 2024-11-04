function calculateProfitability(purchaseMoney, winningStatistics) {
  const PRIZE_AMOUNTS = [2000000000, 30000000, 1500000, 50000, 5000];

  const totalPrizeRevenue = winningStatistics.reduce(
    (totalRevenue, winningCount, index) => {
      return totalRevenue + winningCount * PRIZE_AMOUNTS[index];
    },
    0
  );

  const profitabilityPercentage =
    100 + ((totalPrizeRevenue - purchaseMoney) / purchaseMoney) * 100;
  return parseFloat(profitabilityPercentage.toFixed(2));
}

export default calculateProfitability;
