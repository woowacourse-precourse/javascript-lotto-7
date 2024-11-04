import LottoCollection from "../model/LottoCollection.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoDrawController from "./LottoDrawController.js";
import LottoPurchaseController from "./LottoPurchaseController.js";
import LottoWinningController from "./LottoWinningController.js";

class LottoController {
  #inputView;
  #outputView;
  #lottoCollection;
  #purchaseController;
  #drawController;
  #winningController;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottoCollection = new LottoCollection();
    this.#purchaseController = new LottoPurchaseController(
      this.#inputView,
      this.#outputView,
      this.#lottoCollection
    );
    this.#drawController = new LottoDrawController(
      this.#inputView,
      this.#outputView
    );
    this.#winningController = new LottoWinningController(
      this.#outputView,
      this.#lottoCollection
    );
  }

  async run() {
    await this.#purchaseController.startPurchaseLotto();
    await this.#drawController.startDrawLotto();
    this.#winningController.startWinningLotto(
      this.#purchaseController.getPurchaseAmount(),
      this.#drawController.getWinningNumbers(),
      this.#drawController.getBonusNumber()
    );
  }
}

export default LottoController;
