import InputHandler from "./inputHandler.js";
import LottoMachine from "./lottoMachine.js";

class App {
  async run() {
    const cost = await InputHandler.getCost();
    const lottoMachine = new LottoMachine(cost);

    InputHandler.validateCost(cost);

    lottoMachine.printQuantity();
  }
}

export default App;
