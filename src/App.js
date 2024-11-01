import Controller from './Controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    controller.execute();
  }
}

export default App;
