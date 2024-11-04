import { Console } from '@woowacourse/mission-utils';
import LottoGame from './Lotto/LottoGame.js';

class App {
  async run() {
    try {
      const lottoGame = new LottoGame();
      await lottoGame.initialize();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
