import IOProcessor from './IOProcessor.js';
import LottoController from './LottoController.js';
import { INPUT_MESSAGE } from './constant.js';

class App {
  /**
   *
   */
  constructor() {
    this.ioProcessor = new IOProcessor();
  }

  /**
   *
   */
  async run() {
    this.makeLotto();
  }

  /**
   *
   */
  async makeLotto() {
    const amout = await this.ioProcessor.processInput(
      INPUT_MESSAGE.INPUT_AMOUNT
    );

    this.LottoController = new LottoController(amout);
  }
}

export default App;
