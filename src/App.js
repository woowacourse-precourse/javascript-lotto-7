import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachineService from './Service/LottoMachineService.js';

class App {
  async run() {
    try {
      const lottoMachine = new LottoMachineService();
      await lottoMachine.run();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
