import LottoMachine from "./LottoMachine.js";

class App {
  async run() {
    const lottoMachine = new LottoMachine();
    lottoMachine.setPurchase();

  }
}

export default App;
