import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();

    while (true) {
      try {
        await controller.start();

        break;
      } catch (error) {
        controller.printError(error.message);
      }
    }
  }
}

export default App;
