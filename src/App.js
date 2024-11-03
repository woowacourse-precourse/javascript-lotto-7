import { LottoGame } from './services';

class App {
  async run() {
    const lottoGame = new LottoGame();

    await lottoGame.putMoney();
    await lottoGame.enterNumber();

    lottoGame.presentResult();
  }
}

export default App;
