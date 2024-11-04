import { GameController } from './controller/GameController.js';

class App {
  async run() {
    const gameConroller = new GameController();
    gameConroller.play();
  }
}

export default App;
