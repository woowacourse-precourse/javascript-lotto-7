import LoopWhileValid from './Views/LoopWhileValid.js';

class App {
  async run() {
    const buyPrice = await LoopWhileValid.getBuyPrice();
  }
}

export default App;
