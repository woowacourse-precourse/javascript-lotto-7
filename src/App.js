import LottoGameController from "./controller/LottoGameController.js";

class App {
  async run() {
    const controller = new LottoGameController();
    await controller.startGame();
  }
}

export default App;
