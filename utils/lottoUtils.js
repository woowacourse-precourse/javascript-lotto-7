export function getMatchedCount(lottoNumbers, winningNumbers) {
  return lottoNumbers.filter((number) => winningNumbers.includes(number))
    .length;
}

export function calculateYield(totalPrize, purchaseAmount) {
  return ((totalPrize / purchaseAmount) * 100).toFixed(1);
}
