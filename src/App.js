import LottoController from "./controller/LottoController";
class App {
  async run() {
    new LottoController().init();
  }
}

export default App;
