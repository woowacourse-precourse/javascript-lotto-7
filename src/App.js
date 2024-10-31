import { Console } from '@woowacourse/mission-utils';
import LottoManager from './LottoManager.js';

class App {
  #lottoManager = new LottoManager();

  async run() {
    try {
      await this.#lottoManager.enterInputs();
      this.#lottoManager.calculateResult();
      this.#lottoManager.printStatistics();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
