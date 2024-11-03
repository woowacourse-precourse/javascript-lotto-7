import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class PurchasedLottos {
  #lottos = [];

  async generateLottos(lottoCount) {
    const lottoPromises = Array.from({ length: lottoCount }, async () => {
      const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${numbers.join(', ')}]`);
      return new Lotto(numbers);
    });
    this.#lottos = await Promise.all(lottoPromises);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default PurchasedLottos;
