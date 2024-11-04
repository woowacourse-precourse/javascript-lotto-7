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

    this.LottoController.buyLottos(amout);
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

    this.LottoController.setWinningNumbers(winningNummber);
    this.LottoController.setWinningBonusNumber(winningBonusNumber);

    this.LottoController.f();
  }
}

export default App;
