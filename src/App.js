import { LottoMachine } from "./LottoMachine.js";

export class App {
  async run() {
    const lottomachine = new LottoMachine();
    await lottomachine.start();
  }
}

export default App;
