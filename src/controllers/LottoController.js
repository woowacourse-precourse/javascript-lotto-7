import LottoService from '../services/LottoService.js';
import InputLottoView from '../views/InputLottoView.js';
import OutputLottoView from '../views/OutputLottoView.js';

export default class LottoController {
  #inputLottoView;
  #outputLottoView;
  #lottoService;

  constructor() {
    this.#inputLottoView = new InputLottoView();
    this.#outputLottoView = new OutputLottoView();
    this.#lottoService = new LottoService();
  }

  async run() {
    await this.#getInputPriceAndPurchaseLottos();
  }

  async #getInputPriceAndPurchaseLottos() {
    while (true) {
      try {
        const purchasePrice = await this.#inputLottoView.getInputPrice();
        this.#lottoService.purchaseLottos(purchasePrice);

        return
      } catch (error) {
        this.#outputLottoView.printMessage(error.message);
      }
    }
  }
}
