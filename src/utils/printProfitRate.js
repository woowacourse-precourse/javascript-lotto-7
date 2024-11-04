export const printProfitRate = (price, prizeAmount) => {
  const profitRateCalcul = (((prizeAmount - price) / price) * 100).toFixed(2);
  return profitRateCalcul;
};
