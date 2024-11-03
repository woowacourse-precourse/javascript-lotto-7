import Input from "./input.js";
import LottoController from "./lottoController.js";

class App {
  async run() {
    const userInput = new Input();
    const lottoController = new LottoController();

    const inputMoney = await userInput.getMoney();
    const lottos = await lottoController.buyLotto(inputMoney);
    lottoController.printLottos(lottos);
    
    const inputWinner = await userInput.getWinner();
    const inputBonus = await userInput.getBonus(inputWinner);
  }
}

export default App;