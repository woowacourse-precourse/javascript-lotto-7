import { Console } from '@woowacourse/mission-utils';
import LottoManager from './LottoManager.js';

class App {
  #lottoManager = new LottoManager();

  async run() {
    try {
      await this.#lottoManager.run();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
