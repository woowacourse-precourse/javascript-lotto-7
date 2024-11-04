import InputView from './InputView.js';
import LottoMachine from './LottoMachine.js';
import OutputView from './OutputView.js';
import RankSystem from './RankSystem.js';
import WinningNumbers from './WinningNumbers.js';
import { INITIAL_COUNT, INPUT_PROMPT, NUMBER_SEPARATOR, OUTPUT_MESSAGE } from './constants.js';

class App {
  #lottoMachine;
  #winningNumbers;
  #rankSystem;
  #result;

  async run() {
    await this.start();
    await this.progress();
    this.end();
  }

  async start() {
    await this.readPurchaseAmount();
    this.#lottoMachine.run();
    this.printGeneratedLottos();
  }

  async progress() {
    await this.readWinningNumbers();
    await this.readBonusNumber();
  }

  async end() {
    this.#result = this.getLottosResult();
    this.printWinningInfo();
    this.printROI();
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
      OutputView.printMessage(
        `${OUTPUT_MESSAGE.arraySymbol.opening}${lotto.numbers.join(NUMBER_SEPARATOR + ' ')}${
          OUTPUT_MESSAGE.arraySymbol.closing
        }`
      );
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

  async readBonusNumber() {
    while (!this.#winningNumbers.bonusNumber) {
      try {
        const bonusNumber = await InputView.readUserInput(INPUT_PROMPT.bonusNumber);
        OutputView.printEmptyLine();
        this.#winningNumbers.bonusNumber = bonusNumber;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  getLottosResult() {
    this.#rankSystem = new RankSystem(
      this.#lottoMachine.lottos,
      this.#winningNumbers.numbers,
      this.#winningNumbers.bonusNumber
    );
    return this.#rankSystem.result;
  }

  #setBonusText(index) {
    if (index !== 1) return '';
    return OUTPUT_MESSAGE.winningInfo.bonus;
  }

  #setResultMessage(rank, bonusText) {
    return `${rank.matchedNumberCount}${OUTPUT_MESSAGE.winningInfo.matched}${bonusText} ${
      OUTPUT_MESSAGE.winningInfo.opening
    }${rank.winnings.toLocaleString()}${OUTPUT_MESSAGE.winningInfo.moneyUnit}${OUTPUT_MESSAGE.winningInfo.closing} ${
      OUTPUT_MESSAGE.winningInfo.connecting
    } ${rank.winningCount}${OUTPUT_MESSAGE.winningInfo.countUnit}`;
  }

  printWinningInfo() {
    OutputView.printMessage(OUTPUT_MESSAGE.winningInfo.total);
    OutputView.printMessage(OUTPUT_MESSAGE.winningInfo.horizontal);

    for (let i = this.#result.length - 1; i >= INITIAL_COUNT; i -= 1) {
      const rank = this.#result[i];
      OutputView.printMessage(this.#setResultMessage(rank, this.#setBonusText(i)));
    }
  }

  calculateROI() {
    return (this.#rankSystem.calculateTotalWinnings() / this.#lottoMachine.purchaseAmount) * 100;
  }

  printROI() {
    const ROI = this.calculateROI();
    OutputView.printMessage(
      `${OUTPUT_MESSAGE.roi.openingMessage}${ROI.toFixed(1)}${OUTPUT_MESSAGE.roi.closingMessage}`
    );
  }
}

export default App;
