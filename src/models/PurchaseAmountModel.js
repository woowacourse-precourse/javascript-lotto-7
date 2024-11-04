import { validatePurchaseAmountPipe } from "../validation/validatePurchaseAmount/validatePurchaseAmountPipe.js";

class PurchaseAmountModel {
  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
  }

  #validate(purchaseAmount) {
    validatePurchaseAmountPipe(purchaseAmount);
  }
}

export default PurchaseAmountModel;
