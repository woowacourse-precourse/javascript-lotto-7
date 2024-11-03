import { Console } from '@woowacourse/mission-utils';
import LottoGame from './models/LottoGame.js';

class App {
  async run() {
    try {
      const lottoGame = new LottoGame();
      await lottoGame.play();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
