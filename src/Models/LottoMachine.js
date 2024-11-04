import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoMachine {
  static #START_NUMBER = 1;
  static #FINISH_NUMBER = 45;
  static #LOTTO_NUMBERS_COUNT = 6;
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  static #generateLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      this.#START_NUMBER,
      this.#FINISH_NUMBER,
      this.#LOTTO_NUMBERS_COUNT,
    );
    const lotto = new Lotto(lottoNumbers);

    return lotto.numbers;
  }

  buyLottos(purchaseCount) {
    for (let idx = 0; idx < purchaseCount; idx++) {
      this.#lottos.push(LottoMachine.#generateLottoNumbers());
    }

    return this.#lottos;
  }
}

export default LottoMachine;
