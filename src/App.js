import Controller from './controllers/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    controller.play();
  }
}

export default App;
