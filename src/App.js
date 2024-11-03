import AppController from './controllers/AppController.js';

class App {
  constructor() {
    this.controller = new AppController();
  }

  async run() {
    await this.controller.run();
  }
}

export default App;
