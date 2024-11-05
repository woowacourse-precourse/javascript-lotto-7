import LottoVendingMachine from "./LottoVendingMachine.js";

class App {
  async run() {
    const LottoVM = new LottoVendingMachine();
    await LottoVM.run();
  }
}

export default App;
