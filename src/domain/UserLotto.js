import { MissionUtils } from '@woowacourse/mission-utils';

class UserLotto {
  static #RANGE = { start: 1, end: 45, number: 6 };

  static #PRICE = 1000;

  #lottoCount = 0;

  #userLotto = [];

  constructor(payment) {
    this.#calculateLottoCount(payment);
    this.#issueUserLotto();
  }

  #calculateLottoCount(payment) {
    this.#lottoCount = payment / UserLotto.#PRICE;
  }

  #issueUserLotto() {
    const { start, end, number } = UserLotto.#RANGE;

    for (let index = 0; index < this.#lottoCount; index += 1) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
        start,
        end,
        number,
      );

      this.#userLotto.push(lotto);
    }
  }

  getUserLotto() {
    return this.#userLotto;
  }
}

export default UserLotto;
