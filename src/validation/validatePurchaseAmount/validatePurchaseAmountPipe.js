import { isNumber } from "../isNumber.js";
import { isPurchaseAmountEmpty } from "./isPurchaseAmountEmpty.js";
import { isAmountDivisibleByBaseAmount } from "./isAmountDivisibleByBaseAmount.js";
import { isAmountGreaterThanOrEqualToMinimum } from "./isAmountGreaterThanOrEqualToMinimum.js";
import { LOTTO_PURCHASE_AMOUNT } from "../../constants/validationMessages/lottoPurchaseAmount.js";

export const validatePurchaseAmountPipe = function (purchaseAmount) {
  isPurchaseAmountEmpty(purchaseAmount);
  isNumber(purchaseAmount, LOTTO_PURCHASE_AMOUNT.NOT_A_NUMBER);
  isAmountGreaterThanOrEqualToMinimum(purchaseAmount);
  isAmountDivisibleByBaseAmount(purchaseAmount);
};
