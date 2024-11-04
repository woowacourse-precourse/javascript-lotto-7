import { LOTTO_SINGLE_TICKET_PRICE } from './constants.js';
import { validatePurchaseAmount } from './validate.js';

class LottoMachine {
  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
  }

  calculateLottoCount(purchaseAmount) {
    return purchaseAmount / LOTTO_SINGLE_TICKET_PRICE;
  }
}

export default LottoMachine;
