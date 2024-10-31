import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
import Lotto from './Lotto.js';


class App {
  async run() {
    const purchasePrice = await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
    const divideInto1000 = purchasePrice % 1000;

    if ((divideInto1000) !== 0) {
      throw new Error('[ERROR]');
    }

    const hi = new Lotto([1,2,3,4,5,6]);
    const is1st = hi.isEqual([1,2,3,4,5,6]);
  }
}

export default App;
