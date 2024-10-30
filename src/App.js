import LottoController from "./controller/lottoController.js";

class App {
  async run() {
    await new LottoController().play();
  }
}

export default App;
