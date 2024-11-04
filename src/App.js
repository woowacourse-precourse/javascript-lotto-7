import LottoGame from './LottoGame.js';

class App {
  async run() {
    const lottoGame = new LottoGame();
    await lottoGame.startGame();
  }
}

export default App;