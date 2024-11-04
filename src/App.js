import LottoController from './controller/LottoController.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const match = new LottoController();
      await match.lottoGameStart();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
