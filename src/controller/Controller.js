import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class Controller {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    const purchaseNumber = await this.#inputView.readPurchaseAmount();

    this.#outputView.printMyLotto(0);

    const winningNumber = await this.#inputView.readWinningLotto();
    const bonusNumber = await this.#inputView.readBonusNumber();

    this.#outputView.printResult();
  }
}

export default Controller;