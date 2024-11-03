import { Random } from '@woowacourse/mission-utils';
import { VALUES } from './constants/Values.js';
import Lotto from './Lotto.js';

class LottoStore {
  #lottos;

  constructor(amount) {
    this.#lottos = [];
    this.#purchaseLottos(Number(amount));
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      VALUES.lottoMinNumber,
      VALUES.lottoMaxNumber,
      VALUES.lottoLength,
    ).sort((a, b) => a - b);
  }

  #purchaseOneLotto() {
    const lottoNumbers = this.#generateLottoNumbers();
    this.#lottos.push(new Lotto(lottoNumbers));
  }

  #purchaseLottos(amount) {
    const quantity = amount / VALUES.amountUnit;
    for (let i = 0; i < quantity; i += 1) {
      this.#purchaseOneLotto();
    }
  }

  getLottoNumbers() {
    return this.#lottos.map((lotto) => lotto.getNumber());
  }
}

export default LottoStore;
