import { LottoMachine } from "./LottoMachine.js";

export class App {
  async run() {
    const lottomachine = new LottoMachine();
    lottomachine.start();
  }
}

export default App;
