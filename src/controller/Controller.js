import { LOTTO_PRICE_UNIT } from '../constants/constants.js';
import { validatePurchasePrice } from '../validation/validation.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    const purchasePrice = await this.getParsedPurchasePrice();

    const lottoCount = purchasePrice / LOTTO_PRICE_UNIT;
    this.#outputView.printLottoCount(lottoCount);
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
