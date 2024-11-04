import {
  PRICE_RANGE,
  NUMBER_RANGE,
  LOTTO_NUMBER_LENGTH,
} from '../constant/system.js';
import Lotto from '../Lotto.js';
import { Random } from '@woowacourse/mission-utils';

export default class UserModel {
  #price;
  #lottos;

  constructor(price) {
    this.#price = price;
    this.#lottos = this.#createLottos();
  }

  #createLottos() {
    const lottos = [];
    const lottoLength = this.#price / PRICE_RANGE.MIN;

    for (let i = 0; i < lottoLength; i += 1) {
      const sortedRandomNumber = Random.pickUniqueNumbersInRange(
        NUMBER_RANGE.MIN,
        NUMBER_RANGE.MAX,
        LOTTO_NUMBER_LENGTH,
      ).sort((a, b) => a - b);
      lottos.push(new Lotto(sortedRandomNumber));
    }

    return lottos;
  }

  getLottosInformation() {
    const lottoLength = this.#lottos.length;
    const lottoNumbersArray = this.getLottoNumbersArray();

    return { lottoLength, lottoNumbersArray };
  }

  getLottoNumbersArray() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }

  calculateRateOfReturn(totalPrize) {
    return ((totalPrize / this.#price) * 100).toFixed(1);
  }
}
