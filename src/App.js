import { LottoMachine } from './lottoMachine/LottoMachine.js';

class App {
  async run() {
    const lottoMachine = new LottoMachine();
    await lottoMachine.run();
  }
}

export default App;
