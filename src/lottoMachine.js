import { Console, Random } from '@woowacourse/mission-utils';
import {
  BUY_INPUT_MESSAGE,
  BUY_RESULT_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_INPUT_MAX,
  LOTTO_INPUT_MIN,
  LOTTO_LENGTH,
  UNIT,
} from './constant.js';

class LottoMachine {
  constructor() {}

  async buy() {
    let price;
    while (true) {
      try {
        Console.print(BUY_INPUT_MESSAGE);
        price = +(await Console.readLineAsync(''));
        if (!this.#validate(price)) {
          throw new Error(ERROR_MESSAGE);
        }
        Console.print('');
        return price;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #validate(price) {
    if (isNaN(price)) return false;
    if (price % UNIT !== 0) return false;
    return true;
  }

  release(price) {
    const count = price / UNIT;
    Console.print(BUY_RESULT_MESSAGE(count));
    const lottoArr = this.#releaseLotto(count);
    lottoArr.forEach((item) => Console.print(`[${item.join(', ')}]`));
    Console.print('');
    return lottoArr;
  }

  #releaseLotto(count) {
    const releaseArr = [];
    const releaseStrArr = [];
    while (releaseArr.length < count) {
      const numArr = Random.pickUniqueNumbersInRange(LOTTO_INPUT_MIN, LOTTO_INPUT_MAX, LOTTO_LENGTH);
      numArr.sort((a, b) => a - b);
      const numStr = numArr.join(',');
      if (!releaseStrArr.includes(numStr)) {
        releaseArr.push(numArr);
        releaseStrArr.push(numStr);
      }
    }
    return releaseArr;
  }
}

export default LottoMachine;
