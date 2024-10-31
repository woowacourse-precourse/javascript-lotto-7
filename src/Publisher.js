import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Lottos from './Lottos.js';
import { calculateQuatity } from './utils/index.js';
import { Validator } from './Validator.js';

export class Publisher {
  constructor() {
    this.validator = new Validator();
  }

  setPurchaseQuantity = (purchaseAmount) => {
    this.purchaseQuantity = calculateQuatity(purchaseAmount);
    this.validator.validatePurchaseAmount(purchaseAmount);
  };

  generateLotto = () => {
    const lottoNumbers = Array.from({ length: this.purchaseQuantity }).map(
      () => {
        const randomNumbers = this.generateRandomNumbers();
        return new Lotto(randomNumbers);
      },
    );
    return new Lottos(lottoNumbers);
  };

  generateRandomNumbers = () => {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumbers;
  };
}
