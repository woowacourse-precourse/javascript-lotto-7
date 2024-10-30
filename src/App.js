import GameController from './controller/GameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async run() {
    await this.gameController.prepareGame();
    await this.gameController.runGame();
  }
}

export default App;
