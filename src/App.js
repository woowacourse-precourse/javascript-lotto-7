import LottoMachine from './LottoMachine.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const lottoMachine = new LottoMachine();
      await lottoMachine.play();
    } catch (e) {
      Console.print(e.message);
    }
  }
}

export default App;
