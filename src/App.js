import LottoGameExecutor from './lotto/LottoGameExecutor.js';
import { config } from './config.js';

class App {
  async run() {
    const lottoGameExecutor = new LottoGameExecutor(config.lottoConfig);
    lottoGameExecutor.startGame();
  }
}

export default App;
