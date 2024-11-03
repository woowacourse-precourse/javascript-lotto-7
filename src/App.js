import LottoMachine from "./LottoMachine.js";

class App {
  async run() {
    const lottoMachine = new LottoMachine();
    await lottoMachine.play();

  }
}

export default App;
