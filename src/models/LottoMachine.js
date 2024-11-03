import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import { LOTTO_PRICE_UNIT, REQUIRED_WINNING_NUMBERS_COUNT } from '../constants/lottoConstant.js';

class LottoMachine {
  generateLottos(purchasePrice) {
    const lottoCount = purchasePrice / LOTTO_PRICE_UNIT;
    const lottos = new Array(lottoCount)
      .fill(null)
      .map(_ => new Lotto(Random.pickUniqueNumbersInRange(1, 45, REQUIRED_WINNING_NUMBERS_COUNT).sort((a, b) => a - b)));

    return lottos;
  }
}

export default LottoMachine;
