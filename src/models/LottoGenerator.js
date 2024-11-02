import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { lottoConfig } from './lottoConfig.js';
import { ERROR_MESSAGE } from '../constants/errorMessage.js';

export default class LottoGenerator {
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
      throw new Error(ERROR_MESSAGE.LOTTO_GENERATOR.INVALID_POSITIVE_NUMBER);
    }
  }

  #checkLottoPriceUnit(purchasePrice) {
    if (purchasePrice % lottoConfig.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.LOTTO_GENERATOR.INVALID_LOTTO_PRICE_UNIT);
    }
  }
}
