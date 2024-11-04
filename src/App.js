import LottoController from "../src/controller/Controller.js";

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.start(); // 전체 애플리케이션 시작
  }
}

export default App;
