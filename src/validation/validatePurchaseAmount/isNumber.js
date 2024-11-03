import { LOTTO_PURCHASE_AMOUNT } from "../../constants/validationMessages/lottoPurchaseAmount.js";

export const isNumber = function (purchaseAmount) {
  const isValid = !isNaN(Number(purchaseAmount));
  if (!isValid) throw new Error(LOTTO_PURCHASE_AMOUNT.NOT_A_NUMBER);
};
