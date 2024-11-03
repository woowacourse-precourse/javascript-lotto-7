import { MissionUtils } from '@woowacourse/mission-utils';
import { PURCHASE_AMOUNT_RANGE, LOTTO_PRICE, ERROR_MSG } from '../constants/constants.js';
import { checkRange } from '../util/util.js';
import Lotto from './Lotto.js';

export default class UserLotto {
  #count;
  #lottoList = [];

  constructor(purchasedAmount) {
    this.#validate(purchasedAmount);
    this.#count = purchasedAmount / LOTTO_PRICE;
  }

  getNumbers() {
    const numbers = [];

    this.#lottoList.forEach((lotto) => {
      numbers.push(lotto.getNumbers());
    });

    return numbers;
  }

  getPerchasedAmount() {
    return this.#count * LOTTO_PRICE;
  }

  draw() {
    for (let i = 0; i < this.#count; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoList.push(new Lotto(numbers));
    }
  }

  #validate(purchasedAmount) {
    if (checkRange(purchasedAmount, PURCHASE_AMOUNT_RANGE.min, PURCHASE_AMOUNT_RANGE.max)) {
      throw Error(ERROR_MSG.outOfAmountRange);
    }

    if (purchasedAmount % LOTTO_PRICE) {
      throw Error(ERROR_MSG.priceMisalign);
    }
  }
}
