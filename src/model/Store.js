import { MissionUtils } from '@woowacourse/mission-utils.js';
import { LOTTO } from '../constants/lotto.js';
import Lotto from '../Lotto.js';

class LottoStore {
  static sell(purchase){
    const lottoTicketAmount = this.getLottoTicketAmount(purchase);
    const lottoTickets = Array(lottoTicketAmount).map(createLotto);
    return lottoTickets;
  }

  static getLottoTicketAmount (purchase) {
    return purchase / LOTTO.PRICE;
  }

  static createLotto(){
    const pickedNumber = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.NUMBER_RANGE.MIN, LOTTO.NUMBER_RANGE.MAX, 6);
    return new Lotto(pickedNumber);
  }
}

export default LottoStore;
