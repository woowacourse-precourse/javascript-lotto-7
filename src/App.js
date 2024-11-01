import LottoGameController from './controller/LottoGameController.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGameController();
  }

  async run() {
    await this.#lottoGame.play();
  }
}

export default App;