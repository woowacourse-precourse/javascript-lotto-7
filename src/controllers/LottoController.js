import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import { AMOUNT, NUMBER } from '../constants/constants.js';

function generateLottoNumbers() {
  return Random.pickUniqueNumbersInRange(
    NUMBER.min_range,
    NUMBER.max_range,
    NUMBER.expected_length,
  ).sort((a, b) => a - b);
}

class LottoController {
  #lottos = [];

  generateLottos(amount) {
    const count = amount / AMOUNT.unit;

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
