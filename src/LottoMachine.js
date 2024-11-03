import { validatePurchaseAmount } from './validate.js';

class LottoMachine {
  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
  }
}

export default LottoMachine;
