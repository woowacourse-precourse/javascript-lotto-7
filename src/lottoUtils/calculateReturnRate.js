export default function calculateReturnRate(purchaseAmount, lottoResults) {
  let totalPrize = 0;
  Object.keys(lottoResults).forEach((rank) => {
    totalPrize += lottoResults[rank].prize * lottoResults[rank].count;
  });
  return totalPrize / purchaseAmount;
}
