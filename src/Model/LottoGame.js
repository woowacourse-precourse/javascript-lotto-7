import { Random } from '@woowacourse/mission-utils';
import { RULE } from '../constant/rule.js';

class LottoGame {
  #lottoAmount;
  #lottos;

  constructor(lottoAmount) {
    this.#lottoAmount = lottoAmount;
    this.#lottos = [];

    this.#generateLottos(lottoAmount);
  }

  #generateLottos(amount) {
    for (let i = 0; i < amount; i++) {
      this.#lottos.push(
        Random.pickUniqueNumbersInRange(
          RULE.LOTTO.NUMBER_MIN,
          RULE.LOTTO.NUMBER_MAX,
          RULE.LOTTO.LOTTO_SIZE,
        ),
      );
    }
  }

  getNumbers() {
    return this.numbers;
  }
}

export default LottoGame;
