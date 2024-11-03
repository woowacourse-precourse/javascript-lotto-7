import { isNumber } from "./isNumber.js";
import { isPurchaseAmountEmpty } from "./isPurchaseAmountEmpty.js";
import { isAmountDivisibleByBaseAmount } from "./isAmountDivisibleByBaseAmount.js";
import { isAmountGreaterThanOrEqualToMinimum } from "./isAmountGreaterThanOrEqualToMinimum.js";

export const validatePurchaseAmountPipe = function (purchaseAmount) {
  isPurchaseAmountEmpty(purchaseAmount);
  isNumber(purchaseAmount);
  isAmountGreaterThanOrEqualToMinimum(purchaseAmount);
  isAmountDivisibleByBaseAmount(purchaseAmount);
};
