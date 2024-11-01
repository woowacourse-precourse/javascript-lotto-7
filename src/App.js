import LoopWhileValid from './Views/LoopWhileValid.js';

class App {
  async run() {
    const buyPrice = await LoopWhileValid.getBuyPrice();
    const basicNumbers = await LoopWhileValid.getBasicNumbers();
    const bonusNumber = await LoopWhileValid.getBonusNumbers(basicNumbers);
  }
}

export default App;
