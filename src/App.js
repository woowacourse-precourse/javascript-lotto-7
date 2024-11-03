import Machine from './Machine.js';

class App {
  async run() {
    const lottoMachine = new Machine();
    await lottoMachine.play();
  }
}

export default App;
