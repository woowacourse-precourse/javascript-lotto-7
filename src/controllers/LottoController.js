import Lotto from '../models/Lotto.js';
import { AMOUNT } from '../constants/constants.js';

class LottoController {
  #lottos = [];

  generateLottos(amount) {
    const count = amount / AMOUNT.unit;

    for (let i = 0; i < count; i += 1) {
      const numbers = Lotto.generateLottoNumbers();
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto.getNumbers());
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoController;
