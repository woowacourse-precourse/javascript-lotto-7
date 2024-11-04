import Input from "./input.js";
import LottoController from "./lottoController.js";
import LottoAnalyser from "./lottoAnalyser.js";

class App {
  async run() {
    const userInput = new Input();
    const lottoController = new LottoController();
    const lottoAnalyser = new LottoAnalyser();

    const inputMoney = await userInput.getMoney();
    const lottos = await lottoController.buyLotto(inputMoney);
    lottoController.printLottos(lottos);
    
    const inputWinner = await userInput.getWinner();
    const inputBonus = await userInput.getBonus(inputWinner);

    const results = lottoAnalyser.analyse(lottos, inputWinner, inputBonus);
    const profitRate = lottoAnalyser.calculateProfitRate(results, inputMoney);
    lottoAnalyser.printResults(results, profitRate);
  }
}

export default App;