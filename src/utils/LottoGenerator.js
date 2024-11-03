import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import LOTTO_NUMBER_RANGE from '../constants/lottoNumbers.js';

class LottoGenerator {
  constructor(purchaseCount) {
    this.purchaseCount = purchaseCount;
    this.lottoNumbers = [];
  }

  generateLottoNumbers() {
    for (let i = 0; i < this.purchaseCount; i++) {
      const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_RANGE.minimum,
        LOTTO_NUMBER_RANGE.maximum,
        LOTTO_NUMBER_RANGE.count,
      );
      const LOTTO = new Lotto(NUMBERS);
      this.lottoNumbers.push(LOTTO.getNumbers().sort((a, b) => a - b));
    }
  }
}

export default LottoGenerator;
