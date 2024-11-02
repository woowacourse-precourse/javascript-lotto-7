import { MissionUtils } from '@woowacourse/mission-utils';
import LottoController from './controllers/LottoController.js';

class App {
  async run() {
    try {
      const controller = new LottoController();
      await controller.play();
    } catch (error) {
      MissionUtils.print(error);
      throw error;
    }
  }
}

export default App;
