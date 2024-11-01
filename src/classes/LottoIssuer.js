import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoIssuer {
  static LOTTO_PRICE = 1000;

  static calculateLottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / this.LOTTO_PRICE;

    return lottoCount;
  }

  static generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );

    return numbers;
  }

  static generateLottos(count) {
    return Array(count)
      .fill()
      .map(() => new Lotto(this.generateLottoNumbers()));
  }
}

export default LottoIssuer;
