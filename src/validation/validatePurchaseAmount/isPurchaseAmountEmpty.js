import { VALIDATION_MESSAGES } from "../../constants/constants.js";

export const isPurchaseAmountEmpty = function (purchaseAmount) {
  const isValid = purchaseAmount.split(" ").join("") !== "";
  if (!isValid)
    throw new Error(VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.NOT_EMPTY);
};
