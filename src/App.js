import LottoController from "./controller/LottoController.js";

class App {
  async run() {
    new LottoController().execute();
  }
}

export default App;
