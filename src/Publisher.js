import { calculateQuatity } from './utils/index.js';
import { Validator } from './Validator.js';

export class Publisher {
  constructor(purchaseAmount) {
    this.validator = new Validator();
    this.validator.validatePurchaseAmount(purchaseAmount);
    this.purchaseQuantity = calculateQuatity(purchaseAmount);
  }
}
