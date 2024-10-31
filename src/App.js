import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
import Lotto from './Lotto.js';

class App {
  async run() {
    const purchasePrice = await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
    const LOTTO_PRICE = 1000;
    const divideInto1000 = purchasePrice % LOTTO_PRICE;
    const lottoCount = purchasePrice / LOTTO_PRICE;

    if ((divideInto1000) !== 0) {
      throw new Error('[ERROR]');
    }

    Console.print(`${lottoCount}개를 구매했습니다.`)

    const hi = new Lotto([1,2,3,4,5,6]);
    const is1st = hi.isEqual([1,2,3,4,5,6]);
    const boughtLottos = hi.generateLotto(lottoCount);
    boughtLottos.forEach((lotto) => Console.print(lotto));
  }
}

export default App;
