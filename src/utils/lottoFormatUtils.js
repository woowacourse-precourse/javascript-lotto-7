import {
  COST_UNIT,
  DECIMAL_PLACES,
  MAX_PURCHASE_AMOUNT,
} from '../constants/constraints.js';

export const calculateLottoAmount = (purchaseAmount) => {
  return purchaseAmount / COST_UNIT;
};

export const isUnderMaxPurchaseAmount = (purchaseAmount) => {
  return purchaseAmount <= MAX_PURCHASE_AMOUNT;
};

export const calculateEarningsRatio = (totalEarnings, purchaseCost) => {
  const ratio = (totalEarnings / purchaseCost) * 100;

  return ratio.toLocaleString(undefined, {
    minimumFractionDigits: DECIMAL_PLACES.MINIMUM_FRACTION_DIGITS,
    maximumFractionDigits: DECIMAL_PLACES.MAXIMUM_FRACTION_DIGITS,
  });
};

export const convertStringsToNumbers = (strings) => {
  return strings.map((num) => Number(num.trim()));
};
