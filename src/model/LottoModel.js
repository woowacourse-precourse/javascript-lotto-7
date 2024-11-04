import { LOTTO } from '../constant/constant.js';
import Money from '../vo/Money.js';

class LottoModel {
  #lottoAmount;

  getLottoAmount() {
    return this.#lottoAmount;
  }

  calculateLottoAmount(amount) {
    const money = new Money(amount);
    this.#lottoAmount = money.getAmount() / LOTTO.PRICE;
  }
}

export default LottoModel;
