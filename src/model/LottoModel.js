import { LOTTO } from '../constant/constant.js';
import { getNumbersInRange } from '../utils/rangeUtils.js';
import Money from '../vo/Money.js';
import Lotto from '../vo/Lotto.js';

class LottoModel {
  #lottoAmount;
  #lottoSet;

  getLottoAmount() {
    return this.#lottoAmount;
  }

  calculateLottoAmount(amount) {
    const money = new Money(amount);
    this.#lottoAmount = money.getAmount() / LOTTO.PRICE;
  }

  getLottoSet() {
    return this.#lottoSet;
  }

  createLottoSet() {
    this.#lottoSet = Array.from({ length: this.#lottoAmount }, () =>
      this.#createLotto()
    );
  }

  #createLotto() {
    const lottoNumbers = getNumbersInRange();

    return new Lotto(lottoNumbers);
  }
}

export default LottoModel;
