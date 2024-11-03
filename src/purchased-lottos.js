import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class PurchasedLottos {
  #lottos = [];

  constructor(lottos) {
    this.#lottos = lottos;
  }

  static async generate(lottoCount) {
    const lottoPromises = Array.from({ length: lottoCount }, async () => {
      const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${numbers.join(', ')}]`);
      return new Lotto(numbers);
    });

    const lottos = await Promise.all(lottoPromises);
    return new PurchasedLottos(lottos);
  }

  getLottos() {
    return this.#lottos;
  }
}
export default PurchasedLottos;
