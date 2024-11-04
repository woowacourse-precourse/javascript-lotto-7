import LottoController from './Controller/LottoController.js';
import LottoCalculator from './Models/LottoCalculator.js';
import LottoMachine from './Models/LottoMachine.js';

class App {
  async run() {
    const Controller = new LottoController(
      new LottoMachine(),
      new LottoCalculator(),
    );
    await Controller.run();
  }
}

export default App;
