import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

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

    const boughtLotto = [];
    for(let i = 0 ; i < lottoCount; i++){
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      boughtLotto.push(lotto);
    }

    boughtLotto.forEach((lotto) => Console.print(lotto.toString()));

    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    const bonusNumber = await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);
  }
}

export default App;
