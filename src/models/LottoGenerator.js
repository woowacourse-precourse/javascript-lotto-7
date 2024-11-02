import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export default class LottoGenerator {
  #LOTTO_MIN_NUMBER = 1;
  #LOTTO_MAX_NUMBER = 45;
  #LOTTO_NUM_COUNT = 6;
  #LOTTO_PRICE = 1000;
  #ERROR_MESSAGE = {
    INVALID_LOTTO_PRICE_UNIT: `[ERROR] 구매금액은 ${this.#LOTTO_PRICE}원 단위여야합니다.\n`,
    INVALID_POSITIVE_NUMBER: '[ERROR] 구매금액은 0보다 커야합니다.\n',
  };

  generate(price) {
    this.#validtePurchasePrice(price);
    const lottoCount = price / this.#LOTTO_PRICE;

    const lottos = this.#generateLottos(lottoCount);

    return [lottoCount, lottos];
  }

  #generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        this.#LOTTO_MIN_NUMBER,
        this.#LOTTO_MAX_NUMBER,
        this.#LOTTO_NUM_COUNT
      );

      const sortedNumbers = this.#sortNumbers(numbers);

      return new Lotto(sortedNumbers);
    });
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validtePurchasePrice(purchasePrice) {
    this.#validatePositiveNumber(purchasePrice);
    this.#validateLottoPriceUnit(purchasePrice);
  }

  #validatePositiveNumber(purchasePrice) {
    if (purchasePrice <= 0) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_POSITIVE_NUMBER);
    }
  }

  #validateLottoPriceUnit(purchasePrice) {
    if (purchasePrice % this.#LOTTO_PRICE !== 0) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_LOTTO_PRICE_UNIT);
    }
  }
}
