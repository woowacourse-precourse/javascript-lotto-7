import InputView from '../view/InputView.js';

export default class Controller {
  constructor() {
    this.inputView = new InputView();
  }

  async start() {
    const paidMoney = await this.getMoney();
  }

  async getMoney() {
    const input = await this.inputView.getInput('구입금액을 입력해 주세요.');

    return input;
  }
}
