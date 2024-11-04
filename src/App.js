import LottoGame from "./controller/LottoGame.js";

class App {
  async run() {
    const game = new LottoGame();
    await game.startLotto();
  }
}

export default App;
