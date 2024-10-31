const calculateLottoAmount = (purchaseAmount) => {
  return purchaseAmount / 1000;
};

const calculateEarningsRatio = (totalEarnings, purchaseCost) => {
  const ratio = (totalEarnings / purchaseCost) * 100;

  return ratio.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};
export default calculateLottoAmount;

export { calculateEarningsRatio };
