import { LOTTO_AMOUNT } from '../Constant/constants.js';

export const countPurchaseAmount = (purchasePrice) => {
  const purchaseCount = purchasePrice / LOTTO_AMOUNT.UNIT;

  return purchaseCount;
};
