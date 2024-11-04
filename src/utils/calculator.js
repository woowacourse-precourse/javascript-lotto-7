// 수익률 계산하는 함수
export function calculateProfitRate(totalPrize, purchaseAmount) {
  return ((totalPrize / purchaseAmount) * 100).toFixed(1);
}
