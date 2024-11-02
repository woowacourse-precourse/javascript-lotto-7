import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { lottoConfig } from './lottoConfig.js';

export default class LottoGenerator {
  #ERROR_MESSAGE = {
    INVALID_LOTTO_PRICE_UNIT: `[ERROR] 구매금액은 ${lottoConfig.LOTTO_PRICE}원 단위여야합니다.\n`,
    INVALID_POSITIVE_NUMBER: '[ERROR] 구매금액은 0보다 커야합니다.\n',
  };

  generate(price) {
    this.#validtePurchasePrice(price);
    const lottoCount = price / lottoConfig.LOTTO_PRICE;

    const lottos = this.#generateLottos(lottoCount);

    return [lottoCount, lottos];
  }

  #generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        lottoConfig.MIN_NUMBER,
        lottoConfig.MAX_NUMBER,
        lottoConfig.NUMBERS_COUNT
      );

      const sortedNumbers = this.#sortNumbers(numbers);

      return new Lotto(sortedNumbers);
    });
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validtePurchasePrice(purchasePrice) {
    this.#checkPositiveNumber(purchasePrice);
    this.#checkLottoPriceUnit(purchasePrice);
  }

  #checkPositiveNumber(purchasePrice) {
    if (purchasePrice <= 0) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_POSITIVE_NUMBER);
    }
  }

  #checkLottoPriceUnit(purchasePrice) {
    if (purchasePrice % lottoConfig.LOTTO_PRICE !== 0) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_LOTTO_PRICE_UNIT);
    }
  }
}
