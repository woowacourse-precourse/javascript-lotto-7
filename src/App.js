import InputView from './View/InputView.js';
import OutputView from './View/OutView.js';
import LottoService from '../src/Model/LottoService.js';
import InputHandler from './InputHandler.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottolService = new LottoService();
    this.inputHandler = new InputHandler();
  }

  async run() {
    await this.readPuchaseAmount();
    this.lottolService.drawLottos();

    const lottos = this.lottolService.getLottos();
    this.outputView.printLotto(lottos);

    await this.readWinningNumber();
    await this.readBonusNumber();
  }

  async readPuchaseAmount() {
    while (true) {
      try {
        const userInputString = await this.inputView.readPuchaseAmount();
        const userInputNumber = this.inputHandler.stringToInt(userInputString);

        this.lottolService.setPurcharedAmount(userInputNumber);
        return;
      } catch (errorMsg) {
        this.outputView.print(errorMsg.message);
      }
    }
  }

  async readWinningNumber() {
    while (true) {
      try {
        const userInputString = await this.inputView.getwinningNum();
        const userInputNumbers = this.inputHandler.splitStringToInt(userInputString);

        this.lottolService.setWinningNumber(userInputNumbers);

        return;
      } catch (errorMsg) {
        this.outputView.print(errorMsg.message);
      }
    }
  }

  async readBonusNumber() {
    while (true) {
      try {
        const userInputString = await this.inputView.getbonusNum();
        const userInputNumber = this.inputHandler.stringToInt(userInputString);

        this.lottolService.setBonusNumber([userInputNumber]);

        return;
      } catch (errorMsg) {
        this.outputView.print(errorMsg.message);
      }
    }
  }
}

export default App;
