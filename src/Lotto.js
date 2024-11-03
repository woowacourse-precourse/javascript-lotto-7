import { Console } from '@woowacourse/mission-utils';
import {
  ERROR_MESSAGE,
  LOTTO_INPUT_MAX,
  LOTTO_INPUT_MIN,
  LOTTO_LENGTH,
  LOTTO_PRICE,
  LOTTO_PRICE_KEY,
  LOTTO_RESULT_MESSAGE,
  PRICE_COUNT,
  RATE_RESULT_MESSAGE,
} from './constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    if (!this.#validate(numbers)) throw new Error(ERROR_MESSAGE);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) return false;
    if (numbers.length !== new Set(numbers).size) return false;
    if (numbers.some((item) => isNaN(item))) return false;
    if (numbers.some((item) => item < LOTTO_INPUT_MIN || item > LOTTO_INPUT_MAX)) return false;
    if (numbers.some((item) => item !== Math.floor(item))) return false;
    return true;
  }

  checkLottoResult(lottoArr, bonusNumber) {
    const resultObj = {};
    Object.values(LOTTO_PRICE_KEY).forEach((item) => (resultObj[item] = 0));
    lottoArr.forEach((lotto) => {
      const price = this.#lottoPrice(lotto, bonusNumber);
      resultObj[price]++;
    });
    return resultObj;
  }

  #lottoPrice(lotto, bonusNumber) {
    let count = 0;
    lotto.forEach((num) => {
      if (this.#numbers.includes(num)) count++;
    });
    if (count === PRICE_COUNT.first) return LOTTO_PRICE_KEY.first;
    if (count === PRICE_COUNT.secondThird) {
      if (lotto.includes(bonusNumber)) return LOTTO_PRICE_KEY.second;
      return LOTTO_PRICE_KEY.third;
    }
    if (count === PRICE_COUNT.fourth) return LOTTO_PRICE_KEY.fourth;
    if (count === PRICE_COUNT.fifth) return LOTTO_PRICE_KEY.fifth;
  }

  printLottoResult(result, price) {
    const totalPrice = this.#totalPrice(result);
    const totalRate = this.#totalRate(totalPrice, price);

    LOTTO_RESULT_MESSAGE(result).forEach((item) => Console.print(item));
    Console.print(RATE_RESULT_MESSAGE(totalRate));
  }

  #totalPrice(result) {
    return (
      result[LOTTO_PRICE_KEY.first] * LOTTO_PRICE[LOTTO_PRICE_KEY.first] +
      result[LOTTO_PRICE_KEY.second] * LOTTO_PRICE[LOTTO_PRICE_KEY.second] +
      result[LOTTO_PRICE_KEY.third] * LOTTO_PRICE[LOTTO_PRICE_KEY.third] +
      result[LOTTO_PRICE_KEY.fourth] * LOTTO_PRICE[LOTTO_PRICE_KEY.fourth] +
      result[LOTTO_PRICE_KEY.fifth] * LOTTO_PRICE[LOTTO_PRICE_KEY.fifth]
    );
  }

  #totalRate(totalPrice, price) {
    return ((totalPrice / price) * 100).toFixed(1);
  }
}

export default Lotto;
