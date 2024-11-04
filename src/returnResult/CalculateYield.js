export function calculateTotalPrize(score) {
  const prizeMoney = [0, 2000000000, 30000000, 1500000, 50000, 5000];
  return score.reduce((total, rank) => total + prizeMoney[rank], 0);
}

export function calculateYield(totalPrize, purchaseAmount) {
  if (purchaseAmount === 0) return "0.0"; // 금액이 0일 경우 0% 반환
  return ((totalPrize / purchaseAmount) * 100).toFixed(1); // 수익률 계산
}
