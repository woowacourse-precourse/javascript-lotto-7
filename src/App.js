import IOProcessor from './IOProcessor.js';
import LottoController from './LottoController.js';
import { INPUT_MESSAGE } from './constant.js';

class App {
  /**
   *
   */
  constructor() {
    this.ioProcessor = new IOProcessor();
    this.LottoController = new LottoController();
  }

  /**
   *
   */
  async run() {
    await this.makeLottos();
    await this.makeWinningLottos();
    this.printResult();
  }

  /**
   *
   */
  async makeLottos() {
    const amout = await this.ioProcessor.processInput(INPUT_MESSAGE.INPUT_AMOUNT);

    this.LottoController.buyLottos(Number(amout));
  }

  /**
   *
   */
  async makeWinningLottos() {
    this.ioProcessor.processOuput('');

    const winningNummber = await this.ioProcessor.processInput(INPUT_MESSAGE.INPUT_WINNING_NUMBER);
    const winningBonusNumber = await this.ioProcessor.processInput(
      INPUT_MESSAGE.INPUT_WINNING_BONUS_NUMBER
    );

    this.LottoController.setWinningNumbers(winningNummber);
    this.LottoController.setWinningBonusNumber(winningBonusNumber);
  }

  /**
   *
   */
  printResult() {
    this.LottoController.calculateLottoResult();
    this.LottoController.printResult();
    this.LottoController.calculateTotalEarningPrice();
    this.LottoController.printEarningRate();
  }
}

export default App;
