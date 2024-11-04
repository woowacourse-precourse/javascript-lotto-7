import AppController from "./controllers/AppController.js";

class App {
  constructor() {
    this.appController = new AppController();
  }

  async run() {
    await this.appController.run();
  }
}

export default App;
