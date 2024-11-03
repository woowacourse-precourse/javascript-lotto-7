import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validator from './Validator.js';

class LottoStore {
  #lottoList;

  constructor() {
    this.#lottoList = [];
  }

  #validate(payment) {
    const vaildator = new Validator();
    vaildator.payment(payment);

    return Number(payment.trim());
  }

  buyLotto(payment) {
    const validPayment = this.#validate(payment);
    const lottoCount = validPayment / 1000;

    for (let i = 0; i < lottoCount; i++) {
      const lotto = this.#publishLotto();
      this.#lottoList.push(lotto);
    }
  }

  #publishLotto() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(lottoNumbers);
  }

  getLotto(index) {
    return this.#lottoList[index];
  }

  getLottoCount() {
    return this.#lottoList.length;
  }

  printLottoList() {
    return this.#lottoList.map((lotto) => lotto.print()).join('\n');
  }
}

export default LottoStore;
