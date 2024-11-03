import LottoController from "./controller/LottoController.js";
class App {
  async run() {
    new LottoController().init();
  }
}

export default App;
