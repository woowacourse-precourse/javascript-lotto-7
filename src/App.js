import Money from './Money.js';
import Draw from './Draw.js';
class App {
  async run() {
    const money = await Money.getMoney();
    const lotteryNumbers = Draw.getLotteryNumbers(money);
  }
}

export default App;
