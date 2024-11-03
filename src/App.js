import Input from './Input.js';
import Generation from './Generation.js';
import Output from './Output.js';

class App {
  async run() {
    let seedMoney = await Input.getPurchaseAmount();
    let amountOfLottos = seedMoney / 1000;
    let lottos = Generation.generateLottos(amountOfLottos);
    Output.printLottos(lottos);
    let winningNumbers = await Input.getWinningNumbers();
    let bonusNumber = await Input.getBonusNumber(winningNumbers);
    Output.printResult(lottos, winningNumbers, bonusNumber);
  }
}

export default App;
