import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  validateNumber,
  validatePositiveInteger,
  validateUnit,
  validateMaximum,
} from './Validator.js';

class LottoStore {
  #lottoList;

  constructor() {
    this.#lottoList = [];
  }

  #validate(payment) {
    validateNumber(payment, '금액은 숫자만 입력 가능합니다.');
    validatePositiveInteger(payment, '로또 구입 금액은 양의 정수로만 입력해주세요.');
    validateUnit(payment, '로또 구입 금액은 1000원 단위로만 받습니다.');
    validateMaximum(payment, '10만원 이상은 구매할 수 없습니다.');
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
}

export default LottoStore;
