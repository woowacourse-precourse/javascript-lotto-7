import { Random } from '@woowacourse/mission-utils';

import { LOTTO } from './constants/index.js';

class LotteryRetailer {
  static pickLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.numberCount
    );
  }
}

export default LotteryRetailer;
