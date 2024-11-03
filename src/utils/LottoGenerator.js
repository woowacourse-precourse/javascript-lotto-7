import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';

class LottoGenerator {
  constructor(purchaseCount) {
    this.purchaseCount = purchaseCount;
    this.lottoNumbers = [];
  }

  generateLottoNumbers() {
    for (let i = 0; i < this.purchaseCount; i++) {
      const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const LOTTO = new Lotto(NUMBERS);
      this.lottoNumbers.push(LOTTO.getNumbers().sort((a, b) => a - b));
    }
  }
}

export default LottoGenerator;
