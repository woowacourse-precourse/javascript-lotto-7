import {
  LOTTO_MIN_PURCHASE_AMOUNT,
  VALIDATION_MESSAGES,
} from "../../constants/constants.js";

export const isAmountDivisibleByBaseAmount = function (purchaseAmount) {
  const isValid = purchaseAmount % LOTTO_MIN_PURCHASE_AMOUNT === 0;
  if (!isValid)
    throw new Error(
      VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.NOT_DIVISIBLE_BY_MINIMUM_AMOUNT
    );
};
