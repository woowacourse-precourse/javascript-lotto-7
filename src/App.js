import LottoController from "./LottoConstoller.js"

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.gameStart();
  }
}

export default App;
