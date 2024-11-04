import LottoController from "./controllers/LottoController.js";

class App {
  run() {
    const controller = new LottoController();
    controller.start();
  }
}

export default App;
