import Controller from './controllers/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.play();
  }
}

export default App;
