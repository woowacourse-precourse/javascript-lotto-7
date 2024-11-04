import LottoManager from "./LottoManager.js";

class App {
  async run() {
    try {
      const game = new LottoManager();
      game.play();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
