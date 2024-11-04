import LottoController from "./Controller/LottoController.js";

class App {
  constructor() {
    this.lotto = new LottoController();
  }
  async run() {
    await this.lotto.play();
  }
}

export default App;
