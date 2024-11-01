import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class LottoMachine {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  generateLottoTickets(purchaseAmount) {
    for (let i = 0; i < purchaseAmount; i++) {
      const lottoNumbers = this.generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoMachine;
