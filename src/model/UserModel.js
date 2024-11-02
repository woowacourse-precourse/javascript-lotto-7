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
      const randomNumber = Random.pickUniqueNumbersInRange(
        NUMBER_RANGE.MIN,
        NUMBER_RANGE.MAX,
        LOTTO_NUMBER_LENGTH,
      );
      lottos.push(new Lotto(randomNumber));
    }

    return lottos;
  }

  getLottosInformation() {
    const lottoLength = this.#lottos.length;
    const lottosNumberArray = this.getSortedLottosNumberArray();

    return { lottoLength, lottosNumberArray };
  }

  getSortedLottosNumberArray() {
    return this.#lottos.map((lotto) =>
      lotto.getNumbers().sort((a, b) => a - b),
    );
  }

  caculateRateOfReturn(totalPrize) {
    return ((totalPrize / this.#price) * 100).toFixed(1);
  }
}
