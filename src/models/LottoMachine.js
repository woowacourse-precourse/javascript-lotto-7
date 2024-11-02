import { Random } from '@woowacourse/mission-utils';
import LOTTO_PRICE_UNIT from '../constants/lottoConstant.js';
import Lotto from './Lotto.js';

class LottoMachine {
  generateLottos(purchasePrice) {
    const lottoCount = purchasePrice / LOTTO_PRICE_UNIT;
    const lottos = new Array(lottoCount)
      .fill(null)
      .map(_ => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));

    return lottos;
  }
}

export default LottoMachine;
