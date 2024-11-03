import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  validateNumber,
  validatePositiveInteger,
  validateUnit,
  validateMaximum,
} from './Validator.js';
import { ERROR_MESSAGE } from './constants.js';

class LottoStore {
  #lottoList;

  constructor() {
    this.#lottoList = [];
  }

  #validate(payment) {
    validateNumber(payment, ERROR_MESSAGE.NOT_NUMBER);
    validatePositiveInteger(payment, ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    validateUnit(payment, ERROR_MESSAGE.INVAILD_UNIT);
    validateMaximum(payment, ERROR_MESSAGE.OVER_MAXIMUM);
  }

  buyLotto(payment) {
    this.#validate(payment);

    const lottoCount = payment / 1000;

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
