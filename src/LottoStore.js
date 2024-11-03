import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoStore {
  #lottoList;

  constructor() {
    this.#lottoList = [];
  }

  buyLotto(payment) {
    if (Number.isNaN(payment)) {
      throw new Error('금액은 숫자만 입력 가능합니다.');
    }

    if (payment <= 0 || !Number.isInteger(payment)) {
      throw new Error('로또 구입 금액은 양의 정수로만 입력해주세요.');
    }

    if (payment % 1000 !== 0) {
      throw new Error('로또 구입 금액은 1000원 단위로만 받습니다.');
    }

    if (payment >= 100000) {
      throw new Error('10만원 이상은 구매할 수 없습니다.');
    }

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
