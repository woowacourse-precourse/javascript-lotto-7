import LottoController from "./Controller/LottoController.js";

class App {
  async run() {
    const CONTROLLER = new LottoController;
    await CONTROLLER.run();

  }
}

export default App;
