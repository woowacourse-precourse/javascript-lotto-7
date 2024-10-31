import { Console } from '@woowacourse/mission-utils';
import LottoManager from './LottoManager.js';

class App {
  async run() {
    const lottoManager = new LottoManager();

    try {
      await lottoManager.enterBudget();
      await lottoManager.enterWinningNumbers();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
