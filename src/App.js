import LottoController from "./controller/LottoController.js";

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.run(); // 프로그램 실행
  }
}

export default App;
