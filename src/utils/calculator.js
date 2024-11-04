// 수익률 계산하는 함수
export function calculateProfitRate(totalPrize, purchaseAmount) {
  const profitRate = (totalPrize / purchaseAmount) * 100;
  return Math.round(profitRate * 100) / 100; // 소수 둘째 자리 반올림
}
