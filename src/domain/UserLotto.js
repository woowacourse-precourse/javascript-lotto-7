import { MissionUtils } from '@woowacourse/mission-utils';
import utils from '../utils/utils.js';
import VALUES from '../constants/values.js';

class UserLotto {
  #lottoCount = 0;

  #userLotto = [];

  constructor(payment) {
    this.#calculateLottoCount(payment);
    this.#releaseUserLotto();
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

  #releaseUserLotto() {
    for (let index = 0; index < this.#lottoCount; index += 1) {
      const randoms = UserLotto.#getRandoms();
      const lotto = utils.sortRandoms(randoms);

      this.#userLotto.push(lotto);
    }
  }

  #convertArrayToString() {
    const { division, separator, space, squareBrackets } = VALUES;
    const { open, close } = squareBrackets;
    const strings = this.#userLotto.map(
      (lotto) => `${open}${lotto.join(`${separator}${space}`)}${close}`,
    );

    return strings.join(division);
  }

  getUserLottoInfo() {
    return {
      userLotto: this.#userLotto,
      lottoDetails: this.#convertArrayToString(),
      lottoCount: utils.convertNumberFormat(this.#lottoCount),
    };
  }
}

export default UserLotto;
