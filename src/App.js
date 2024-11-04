import InputView from './InputView.js';
import LottoMachine from './LottoMachine.js';
import OutputView from './OutputView.js';
import WinningNumbers from './WinningNumbers.js';
import { INPUT_PROMPT, NUMBER_SEPARATOR, OUTPUT_MESSAGE } from './constants.js';

class App {
  #lottoMachine;
  #winningNumbers;

  async run() {
    await this.readPurchaseAmount();
    this.printGeneratedLottos();
    await this.readWinningNumbers();
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

  async readWinningNumbers() {
    while (!this.#winningNumbers) {
      try {
        const winningNumbers = await InputView.readUserInput(INPUT_PROMPT.winningNumbers);
        OutputView.printEmptyLine();
        this.#winningNumbers = new WinningNumbers(winningNumbers.split(NUMBER_SEPARATOR));
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }
}

export default App;
