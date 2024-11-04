import IOProcessor from './IOProcessor.js';
import { INPUT_MESSAGE } from './constant.js';

class App {
  constructor() {
    this.ioProcessor = new IOProcessor();
  }

  async run() {
    const amout = await this.ioProcessor.processInput(
      INPUT_MESSAGE.INPUT_AMOUNT
    );
  }
}

export default App;
