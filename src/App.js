import InputView from './InputView.js';
import LottoMachine from './LottoMachine.js';
import OutputView from './OutputView.js';
import { INPUT_PROMPT } from './constants.js';

class App {
  #lottoMachine;

  async run() {
    await this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    while (!this.#lottoMachine) {
      try {
        const purchaseAmount = await InputView.readUserInput(INPUT_PROMPT.purchaseAmount);
        OutputView.printEmptyLine();
        this.#lottoMachine = new LottoMachine(purchaseAmount);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }
}

export default App;
