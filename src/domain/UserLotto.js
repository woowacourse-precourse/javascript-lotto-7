import { MissionUtils } from '@woowacourse/mission-utils';
import VALUES from '../constants/values.js';

class UserLotto {
  static #RANGE = { start: 1, end: 45, number: 6 };

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
    const { start, end, number } = UserLotto.#RANGE;
    const randoms = MissionUtils.Random.pickUniqueNumbersInRange(
      start,
      end,
      number,
    );

    return randoms;
  }

  static #sortRandoms(randoms) {
    return randoms.sort((first, later) => first - later);
  }

  #issueUserLotto() {
    for (let index = 0; index < this.#lottoCount; index += 1) {
      const randoms = UserLotto.#getRandoms();
      const lotto = UserLotto.#sortRandoms(randoms);

      this.#userLotto.push(lotto);
    }
  }

  getUserLotto() {
    return this.#userLotto;
  }
}

export default UserLotto;
