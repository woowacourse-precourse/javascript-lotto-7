import LottoController from "./controller/lottoController.js";


class App {
  async run() {
    await new LottoController().issueLotto();
  }
}

export default App;
