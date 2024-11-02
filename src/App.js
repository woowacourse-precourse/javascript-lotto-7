import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();

    while (true) {
      try {
        await controller.purchaseLotto();
        await controller.setWinningNumbers();
        await controller.setBonusNumber();

        break;
      } catch (error) {
        controller.printError(error.message);
      }
    }
  }
}

export default App;
