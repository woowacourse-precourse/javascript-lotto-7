import Lotto from '../Lotto.js';
import { Random } from '@woowacourse/mission-utils';
import { validatePurchaseAmount } from '../utils/validation.js';

class LottoNumberGenerator {
  #lottoAmount;

  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
    this.#lottoAmount = purchaseAmount / 1000;
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
