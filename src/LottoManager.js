import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoManager {
  constructor() {
    this.lottoTickets = [];
  }

  generateLottos(amount) {
    const lottos = [];
    for (let i = 0; i < amount; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottos.push(new Lotto(lottoNumbers));
    }
    this.lottoTickets = lottos;
  }

  printLottos() {
    this.lottoTickets.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  getLottoTickets() {
    return this.lottoTickets;
  }
}

export default LottoManager;
