import GameController from './Controller/GameController.js';

class App {
  async run() {
    const controller = new GameController();

    await controller.init();
  }
}

export default App;
