import LottoGame from './controllers/LottoGame.js';

class App {
  async run() {
    const lottoGame = new LottoGame();
    await lottoGame.startGame();
  }
}

export default App;
