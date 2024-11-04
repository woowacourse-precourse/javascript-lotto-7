import { LottoGame } from "./domain/lottoGame.js";

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async run() {
    await this.#lottoGame.playGame();
    await this.#lottoGame.resultGame();
  }
}

export default App;