import LottoGame from './LottoGame/lottoGame.js';
class App {
  async run() {
    const game = new LottoGame();
    game.start();
  }
}

export default App;
