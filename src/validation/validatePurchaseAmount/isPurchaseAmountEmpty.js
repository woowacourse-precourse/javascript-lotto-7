import { LOTTO_PURCHASE_AMOUNT } from "../../constants/validationMessages/lottoPurchaseAmount.js";

export const isPurchaseAmountEmpty = function (purchaseAmount) {
  const isValid = purchaseAmount.split(" ").join("") !== "";
  if (!isValid) throw new Error(LOTTO_PURCHASE_AMOUNT.NOT_EMPTY);
};
