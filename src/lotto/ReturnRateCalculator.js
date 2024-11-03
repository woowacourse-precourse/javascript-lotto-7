export function calculateReturnRate(totalPrize, purchaseAmount) {
  return Math.round(totalPrize / purchaseAmount * 10000) / 100;
}

