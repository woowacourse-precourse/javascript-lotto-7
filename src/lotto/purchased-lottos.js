import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO_RULES } from '../constant/index.js';

class PurchasedLottos {
  #lottos = [];

  constructor(lottos) {
    this.#lottos = lottos;
  }

  static async generate(lottoCount) {
    const lottoPromises = Array.from({ length: lottoCount }, async () => {
      const numbers = await Random.pickUniqueNumbersInRange(LOTTO_RULES.MIN_NUMBER, LOTTO_RULES.MAX_NUMBER, LOTTO_RULES.NUMBER_COUNT);
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
