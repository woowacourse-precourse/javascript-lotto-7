import { MissionUtils } from '@woowacourse/mission-utils';
import LottoController from './controllers/LottoController.js';

class App {
  async run() {
    try {
      const controller = new LottoController();
      await controller.play();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
