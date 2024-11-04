import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBERS_CONDITION, LOTTO_SINGLE_TICKET_PRICE } from './constants.js';
import { validatePurchaseAmount } from './validate.js';

class LottoMachine {
  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
  }

  calculateLottoCount(purchaseAmount) {
    return purchaseAmount / LOTTO_SINGLE_TICKET_PRICE;
  }

  pickRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBERS_CONDITION.minNumber,
      LOTTO_NUMBERS_CONDITION.maxNumber,
      LOTTO_NUMBERS_CONDITION.count
    );
  }
}

export default LottoMachine;
