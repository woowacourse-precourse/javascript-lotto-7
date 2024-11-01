import LottoMachine from './lottomachine/LottoMachine.js';

class App {
  constructor() {
    this.machine = new LottoMachine();
  }

  async run() {
    await this.machine.start();
  }
}

export default App;
