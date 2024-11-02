import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from './LottoMachine.js';

class App {
  async run() {
    try {
      const lottoMachine = new LottoMachine();
      await lottoMachine.run();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
