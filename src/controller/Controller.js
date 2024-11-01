import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { validateMoney } from '../utils/validation.js';

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async start() {
    const paidMoney = await this.getMoney();
  }

  async getMoney() {
    try {
      const input = await this.inputView.getInput('구입금액을 입력해 주세요.');
      validateMoney(input);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getMoney();
    }
  }
}
