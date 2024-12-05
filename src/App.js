import { LottoController } from "./controller/LottoController.js";

class App {
  async run() {
    const lottoControl = new LottoController();
    await lottoControl.startLottoGame();
  }
}

export default App;
