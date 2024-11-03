import { validatePurchaseAmountPipe } from "./validatePurchaseAmount/validatePurchaseAmountPipe.js";

export const validationPipe = function (purchaseAmount) {
  validatePurchaseAmountPipe(purchaseAmount);
};
