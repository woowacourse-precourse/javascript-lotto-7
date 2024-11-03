import { PURCHASE_AMOUNT_ERROR } from "../constants/errorMessage.js";
import { LOTTO_PRICE } from "../constants/gameRules.js";

export const validatePurchaseAmount = (purchaseAmount) => {
  if (Number.isNaN(purchaseAmount)) {
    throw new Error(PURCHASE_AMOUNT_ERROR.NOT_A_NUMBER);
  }

  if (purchaseAmount !== 0 && !purchaseAmount) {
    throw new Error(PURCHASE_AMOUNT_ERROR.EMPTY_VALUE);
  }

  if (purchaseAmount < LOTTO_PRICE) {
    throw new Error(PURCHASE_AMOUNT_ERROR.UNDER_MIN_PRICE);
  }

  if (purchaseAmount % 1000 !== 0) {
    throw new Error(PURCHASE_AMOUNT_ERROR.NOT_DIVIDED);
  }
};
