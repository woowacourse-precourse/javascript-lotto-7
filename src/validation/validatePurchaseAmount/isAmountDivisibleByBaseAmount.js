import { LOTTO_MIN_PURCHASE_AMOUNT } from "../../constants/lottoConstants.js";
import { LOTTO_PURCHASE_AMOUNT } from "../../constants/validationMessages/lottoPurchaseAmount.js";

export const isAmountDivisibleByBaseAmount = function (purchaseAmount) {
  const isValid = purchaseAmount % LOTTO_MIN_PURCHASE_AMOUNT === 0;
  if (!isValid)
    throw new Error(LOTTO_PURCHASE_AMOUNT.NOT_DIVISIBLE_BY_MINIMUM_AMOUNT);
};
