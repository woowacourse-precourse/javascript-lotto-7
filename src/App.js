import InputView from './InputView.js';
import LottoMachine from './LottoMachine.js';
import OutputView from './OutputView.js';
import { INPUT_PROMPT, OUTPUT_MESSAGE } from './constants.js';

class App {
  #lottoMachine;

  async run() {
    await this.readPurchaseAmount();
    this.printGeneratedLottos();
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

  printGeneratedLottos() {
    OutputView.printMessage(`${this.#lottoMachine.lottoCount}${OUTPUT_MESSAGE.lottoCount}`);
    this.#lottoMachine.lottos.forEach((lotto) => {
      OutputView.printMessage(lotto.numbers);
    });
    OutputView.printEmptyLine();
  }
}

export default App;
