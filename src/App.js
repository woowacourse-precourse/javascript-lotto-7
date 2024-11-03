import LottoMachine from './LottoMachine.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const lottoMachine = new LottoMachine();
      await lottoMachine.start();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
