import { LottoMachine } from "./LottoMachine.js";

class App {
  async run() {
    const lottomachine = new LottoMachine();
    lottomachine.start();
  }
}

export default App;
