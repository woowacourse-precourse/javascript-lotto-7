import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";


class App {
  async run() {
    const purchasePrice = await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
    const divideInto1000 = purchasePrice % 1000;
    if((divideInto1000).length!==0){
      throw new Error('[ERROR]');
    }
  }
}

export default App;
