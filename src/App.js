import LottoGame from './models/LottoGame.js';

class App {
  async run() {
    const lottoGame = new LottoGame();

    await lottoGame.initialize();
    lottoGame
      .computeWinners()
      .computeTotalYield()
      .printResult();
  }
}

export default App;
