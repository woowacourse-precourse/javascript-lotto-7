import LottoGame from './models/LottoGame.js';

class App {
  async run() {
    const lottoGame = new LottoGame();
    await lottoGame.play();
  }
}

export default App;
