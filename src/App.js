import { Console } from '@woowacourse/mission-utils';
import Money from './Money.js';
import Draw from './Draw.js';
class App {
  async run() {
    try {
      const money = await Money.getMoney();
      const lotteryNumbers = Draw.getLotteryNumbers(money);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
