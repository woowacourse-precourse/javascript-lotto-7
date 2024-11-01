import LottoCoreController from './controller/LottoCoreController.js';

class App {
  async run() {
    await new LottoCoreController().start();
  }
}

export default App;
