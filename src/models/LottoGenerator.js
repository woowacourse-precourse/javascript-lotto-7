import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';

export default class LottoGenerator {
  generate(price) {
    this.#validtePurchasePrice(price);
    const lottoCount = price / LOTTO_CONFIG.LOTTO_PRICE;

    const lottos = this.#generateLottos(lottoCount);

    return [lottoCount, lottos];
  }

  #generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_CONFIG.MIN_NUMBER,
        LOTTO_CONFIG.MAX_NUMBER,
        LOTTO_CONFIG.NUMBERS_COUNT,
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
    if (purchasePrice % LOTTO_CONFIG.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.LOTTO_GENERATOR.INVALID_LOTTO_PRICE_UNIT);
    }
  }
}
