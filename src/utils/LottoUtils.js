import { COST_UNIT, DECIMAL_PLACES } from '../constants/constraints.js';

const calculateLottoAmount = (purchaseAmount) => {
  return purchaseAmount / COST_UNIT;
};

const calculateEarningsRatio = (totalEarnings, purchaseCost) => {
  const ratio = (totalEarnings / purchaseCost) * 100;

  return ratio.toLocaleString(undefined, {
    minimumFractionDigits: DECIMAL_PLACES.MINIMUM_FRACTION_DIGITS,
    maximumFractionDigits: DECIMAL_PLACES.MAXIMUM_FRACTION_DIGITS,
  });
};
export default calculateLottoAmount;

export { calculateEarningsRatio };
