import LottoVendingMachine from "./LottoVendingMachine.js";

class App {
  async run() {
    const LottoVM = new LottoVendingMachine();
    LottoVM.run();
  }
}

export default App;
