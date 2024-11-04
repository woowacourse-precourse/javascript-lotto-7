export function calculateTotalPrize(score) {
  const prizeMoney = [0, 2000000000, 30000000, 1500000, 50000, 5000];
  return score.reduce((total, rank) => total + prizeMoney[rank], 0);
}

export function calculateYield(totalPrize, purchaseAmount) {
  if (purchaseAmount === 0) return "0.0";
  return ((totalPrize / purchaseAmount) * 100).toFixed(1);
}
