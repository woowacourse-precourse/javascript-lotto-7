import InputView from './View/InputView.js';
import OutputView from './View/OutView.js';
import LottoService from '../src/Model/LottoService.js';
import { ERROR_MSG, REGEXP } from '../Util/Constants.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottolService = new LottoService();
  }

  async run() {
    await this.getPuchaseAmount();
    this.lottolService.drawLottos();

    const lottos = this.lottolService.getLottos();
    this.outputView.printLotto(lottos);
  }

  async getPuchaseAmount() {
    while (true) {
      try {
        const userInput = await this.inputView.readPuchaseAmount();

        this.validateNumber(userInput);
        this.lottolService.setPurcharedAmount(this.stringToInt(userInput));

        return;
      } catch (errorMsg) {
        this.outputView.print(errorMsg.message);
      }
    }
  }

  stringToInt(string) {
    return parseInt(string, 10);
  }

  validateNumber(string) {
    if (REGEXP.IS_NUMBER.test(string) === false) {
      throw Error(ERROR_MSG.notANumber);
    }
  }
}

export default App;
