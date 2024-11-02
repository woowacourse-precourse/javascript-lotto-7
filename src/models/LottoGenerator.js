import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export default class LottoGenerator {
  #LOTTO_MIN_NUMBER = 1;
  #LOTTO_MAX_NUMBER = 45;
  #LOTTO_NUM_COUNT = 6;

  generate() {
    const numbers = Random.pickUniqueNumbersInRange(
      this.#LOTTO_MIN_NUMBER,
      this.#LOTTO_MAX_NUMBER,
      this.#LOTTO_NUM_COUNT
    );

    const lotto = new Lotto(numbers);

    return lotto;
  }
}
