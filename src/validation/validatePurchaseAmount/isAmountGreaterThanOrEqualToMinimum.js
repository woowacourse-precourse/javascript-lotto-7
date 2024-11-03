import {
  LOTTO_MIN_PURCHASE_AMOUNT,
  VALIDATION_MESSAGES,
} from "../../constants/constants.js";

export const isAmountGreaterThanOrEqualToMinimum = function (purchaseAmount) {
  const isValid = purchaseAmount >= LOTTO_MIN_PURCHASE_AMOUNT;
  if (!isValid)
    throw new Error(
      VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.MIN_LOTTO_PURCHASE_AMOUNT
    );
};
