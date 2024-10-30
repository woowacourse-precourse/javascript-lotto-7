import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';

function generateLottoNumbers() {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
}

class LottoController {
  #lottos = [];

  generateLottos(amount) {
    const count = amount / 1000;

    for (let i = 0; i < count; i += 1) {
      const numbers = generateLottoNumbers();
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);
    }
  }

  getLottos() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }
}

export default LottoController;
