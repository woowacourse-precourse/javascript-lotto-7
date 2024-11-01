import { LottoGame } from './services/index.js';

class App {
  async run() {
    const lottoGame = new LottoGame();

    await lottoGame.putMoney();
    await lottoGame.enterNumber();
  }
}

export default App;
