import GameController from './controller/GameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async run() {
    const randomLotto = await this.gameController.prepareGame();
    const gameResult = await this.gameController.runGame(randomLotto);
    await this.gameController.finishGame(gameResult);
  }
}

export default App;
