import { MissionUtils } from '@woowacourse/mission-utils';
import { PURCHASE_AMOUNT_RANGE, LOTTO_PRICE, ERROR_MSG } from '../../Util/Constants.js';
import Lotto from '../Lotto.js';

export default class LottoService {
  #lottoCount;

  #lottos = [];

  construct() {
    this.#lottoCount = 0;
  }

  setPurcharedAmount(price) {
    this.#validate(price);
    this.#lottoCount = price / LOTTO_PRICE;
  }

  getlottoCount() {
    return this.#lottoCount;
  }

  getLottos() {
    const lottoNumberList = [];
    this.#lottos.forEach((lotto) => {
      lottoNumberList.push(lotto.getNumbers());
    });

    return lottoNumberList;
  }

  drawLottos() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  #validate(price) {
    if (price < PURCHASE_AMOUNT_RANGE.min || price > PURCHASE_AMOUNT_RANGE.max) {
      throw Error(ERROR_MSG.outOfRange);
    }

    if (price % LOTTO_PRICE) {
      throw Error(ERROR_MSG.priceMisalign);
    }
  }
}
