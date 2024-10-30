import LottoGame from './LottoGame.js';
class App {
  async run() {
    const game = new LottoGame();
    await game.start();
  }
}

export default App;
