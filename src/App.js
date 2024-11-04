import Match from './domains/Match.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const match = new Match();
      await match.getLottos();
      await match.getJackpot();
      match.resetRanks();
      match.matchLottos();
      match.displayResult();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
