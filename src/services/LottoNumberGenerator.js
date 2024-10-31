import ERROR_MESSAGES from '../constants/errorConstants.js';
import Lotto from '../Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class LottoNumberGenerator {
  #lottoAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#lottoAmount = purchaseAmount / 1000;
  }

  #validate(purchaseAmount) {
    if (purchaseAmount === "" || isNaN(Number(purchaseAmount))) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER);
    }
    if (purchaseAmount % 1000 != 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND);
    }
    if (Number(purchaseAmount) <= 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_MORE_THAN_ZERO);
    }
  }

  #randomGererateNumber() {
    const randomNumberArray = Random.pickUniqueNumbersInRange(1, 45, 6)
      .map(Number)
      .sort((a, b) => a - b);
    return randomNumberArray;
  }

  generateLotto(repository) {
    for (let i = 0; i < this.#lottoAmount; i++) {
      const lotto = new Lotto(this.#randomGererateNumber());
      repository.addLottos(lotto);
    }
  }
}

export default LottoNumberGenerator;
