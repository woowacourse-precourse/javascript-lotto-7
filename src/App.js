import { errorHandler } from './errorHandler.js';
import Machine from './Machine.js';

class App {
  async run() {
    try {
      const lottoMachine = new Machine();
      await lottoMachine.play();
    } catch (error) {
      errorHandler(error);
    }
  }
}

export default App;
