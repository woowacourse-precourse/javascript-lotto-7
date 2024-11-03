import { LOTTO_MIN_PURCHASE_AMOUNT } from "../../constants/lottoConstants.js";
import { LOTTO_PURCHASE_AMOUNT } from "../../constants/validationMessages/lottoPurchaseAmount.js";

export const isAmountGreaterThanOrEqualToMinimum = function (purchaseAmount) {
  const isValid = purchaseAmount >= LOTTO_MIN_PURCHASE_AMOUNT;
  if (!isValid)
    throw new Error(LOTTO_PURCHASE_AMOUNT.MIN_LOTTO_PURCHASE_AMOUNT);
};
