import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachineController from './Controller/LottoMachineController.js';

class App {
  async run() {
    try {
      const lottoMachineController = new LottoMachineController();
      await lottoMachineController.run();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
