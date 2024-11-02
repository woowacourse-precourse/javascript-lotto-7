import { MissionUtils } from '@woowacourse/mission-utils';
import utils from '../utils/utils.js';
import VALUES from '../constants/values.js';

class UserLotto {
  #lottoCount = 0;

  #userLotto = [];

  constructor(payment) {
    this.#calculateLottoCount(payment);
    this.#issueUserLotto();
  }

  #calculateLottoCount(payment) {
    this.#lottoCount = payment / VALUES.price;
  }

  static #getRandoms() {
    const { start, end, size } = VALUES.range;
    const randoms = MissionUtils.Random.pickUniqueNumbersInRange(
      start,
      end,
      size,
    );

    return randoms;
  }

  #issueUserLotto() {
    for (let index = 0; index < this.#lottoCount; index += 1) {
      const randoms = UserLotto.#getRandoms();
      const lotto = utils.sortRandoms(randoms);

      this.#userLotto.push(lotto);
    }
  }

  #convertArrayToString() {
    const { open, close } = VALUES.squareBrackets;
    const strings = this.#userLotto.map(
      (lotto) => `${open}${lotto.join(`${VALUES.separator} `)}${close}`,
    );

    return strings.join(VALUES.division);
  }

  getUserLottoInfo() {
    return {
      userLotto: this.#userLotto,
      lottoString: this.#convertArrayToString(),
      lottoCount: utils.convertNumberFormat(this.#lottoCount),
    };
  }
}

export default UserLotto;
