import { Console } from '@woowacourse/mission-utils';
import LottoController from './controllers/LottoController.js';

class App {
  async run() {
    try {
      const lottoController = new LottoController();
      await lottoController.startLotto();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
