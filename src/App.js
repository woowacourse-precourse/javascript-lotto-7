import GameController from './controller/GameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async run() {
    const randomLotto = await this.gameController.prepareGame();
    await this.gameController.runGame(randomLotto);
  }
}

export default App;
