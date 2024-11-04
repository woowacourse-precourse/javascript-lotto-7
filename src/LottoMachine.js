import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from './constants.js';
import Lotto from './Lotto.js';

class LottoMachine {
  static createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.LENGTH
    );
    return new Lotto(numbers);
  }

  static createLottos(count) {
    return Array.from({ length: count }, () => this.createLotto());
  }
}

export default LottoMachine;
