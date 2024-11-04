import LottoGame from "./domain/LottoGame.js";

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async run() {
    try {
      await this.#lottoGame.play();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
