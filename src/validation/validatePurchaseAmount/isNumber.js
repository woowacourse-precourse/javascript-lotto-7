import { VALIDATION_MESSAGES } from "../../constants/constants.js";

export const isNumber = function (purchaseAmount) {
  const isValid = !isNaN(Number(purchaseAmount));
  if (!isValid)
    throw new Error(VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.NOT_A_NUMBER);
};
