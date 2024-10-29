import { validatePurchasePrice } from '../validation/validation.js';
import InputView from '../view/InputView.js';

class Controller {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    const purchasePrice = await this.getParsedPurchasePrice();
  }

  async getParsedPurchasePrice() {
    const purchasePrice = await this.#inputView.getInput(
      '구입금액을 입력해 주세요.\n'
    );

    validatePurchasePrice(purchasePrice);

    return Number(purchasePrice);
  }
}

export default Controller;
