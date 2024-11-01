import LottoService from '../services/LottoService.js';
import InputLottoView from '../views/InputLottoView.js';
import OutputLottoView from '../views/OutputLottoView.js';

export default class LottoController {
  #inputLottoView
  #outputLottoView
  #lottoService

  constructor() {
    this.#inputLottoView = new InputLottoView();
    this.#outputLottoView = new OutputLottoView();
    this.#lottoService = new LottoService();
  }

  async run() {
    // view를 통해 입력받기
    const purchasePrice = await this.#inputLottoView.getInputPrice();

    // service로 로또 구매하기
    this.#lottoService.purchaseLottos(purchasePrice);
  }
}
