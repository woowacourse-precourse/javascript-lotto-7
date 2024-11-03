import Validate from './Validate.js';
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  #lottoCount;
  #lottoDigitCount;
  #allLottos;
  constructor(money) {
    Validate.validateMoney(money);
    this.#lottoCount = parseInt(money / 1000, 10);
    this.#lottoDigitCount = 6;
    this.#allLottos = this.#buyLottos(this.#lottoCount, this.#lottoDigitCount);
  }

  #buyLottos() {
    return Array.from({ length: this.#lottoCount }, () => this.#makeLotto());
  }

  #makeLotto() {
    return new Lotto(Random.pickUniqueNumbersInRange(1, 45, this.#lottoDigitCount));
  }
}

export default LottoMachine;
