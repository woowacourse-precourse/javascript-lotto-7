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

  getUserLotto() {
    return this.#userLotto;
  }
}

export default UserLotto;
