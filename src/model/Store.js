import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/lotto.js';
import Lotto from '../Lotto.js';

class LottoStore {
  static sell(purchase){
    const lottoTicketAmount = LottoStore.#getLottoTicketAmount(purchase);
    return  LottoStore.#createLotto(lottoTicketAmount);
  }

  static #getLottoTicketAmount (purchase) {
    return purchase.amount / LOTTO.PRICE;
  }

  static #createLotto(amount){
    const lottos = Array.from({length: amount},() => {
      const pickedNumber = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.NUMBER_RANGE.MIN, LOTTO.NUMBER_RANGE.MAX, 6);
      return new Lotto(pickedNumber);
    });
    return lottos;
  }
  
}

export default LottoStore;
