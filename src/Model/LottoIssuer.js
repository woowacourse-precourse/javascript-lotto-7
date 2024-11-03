import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export default class LottoIssuer {
  static #LOTTO_PRICE = 1000;

  static #ERROR_MESSAGE = Object.freeze({
    INVALID_AMOUNT: '[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.',
  });

  #amount;

  constructor(purchaseAmount) {
    const validAmount = LottoIssuer.validate(purchaseAmount);
    this.#amount = validAmount;
  }

  static validate(purchaseAmount) {
    const amount = Number(purchaseAmount);

    if (
      Number.isInteger(amount) &&
      amount > 0 &&
      amount % LottoIssuer.#LOTTO_PRICE === 0
    ) {
      return amount / LottoIssuer.#LOTTO_PRICE;
    }

    throw new Error(LottoIssuer.#ERROR_MESSAGE.INVALID_AMOUNT);
  }

  issue() {
    return Array.from({ length: this.#amount }, () => {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(lottoNumbers);
    });
  }
}
