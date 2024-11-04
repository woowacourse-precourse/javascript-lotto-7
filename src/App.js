import IOProcessor from './IOProcessor.js';
import LottoController from './LottoController.js';
import { INPUT_MESSAGE } from './constant.js';

class App {
  /**
   *
   */
  constructor() {
    this.ioProcessor = new IOProcessor();
  }

  /**
   *
   */
  async run() {
    await this.makeLotto();
    await this.makeWinningLotto();
  }

  /**
   *
   */
  async makeLotto() {
    const amout = await this.ioProcessor.processInput(
      INPUT_MESSAGE.INPUT_AMOUNT
    );

    this.LottoController = new LottoController(amout);
  }

  /**
   *
   */
  async makeWinningLotto() {
    this.ioProcessor.processOuput('');

    const winningNummber = await this.ioProcessor.processInput(
      INPUT_MESSAGE.INPUT_WINNING_NUMBER
    );
    const winningBonusNumber = await this.ioProcessor.processInput(
      INPUT_MESSAGE.INPUT_WINNING_BONUS_NUMBER
    );
  }
}

export default App;
