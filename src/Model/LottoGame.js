import { Console, Random } from '@woowacourse/mission-utils';
import { RULE } from '../constant/rule.js';

class LottoGame {
  #lottoAmount;
  #lottos;

  constructor(lottoAmount) {
    this.#lottoAmount = lottoAmount;
    this.#lottos = [];

    this.#generateLottos();
  }

  #generateLottos() {
    for (let i = 0; i < this.#lottoAmount; i++) {
      this.#lottos.push(
        Random.pickUniqueNumbersInRange(
          RULE.LOTTO.NUMBER_MIN,
          RULE.LOTTO.NUMBER_MAX,
          RULE.LOTTO.LOTTO_SIZE,
        ),
      );
    }
  }

  printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(lotto);
    });
    Console.print('');
  }
}

export default LottoGame;
