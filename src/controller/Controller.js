import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import calculation from '../utils/lottoCalculator.js';
import Lotto from '../models/Lotto.js';
import OutputView from '../view/OutputView.js';
import InputHandler from '../handler/inputHandler.js';

class Controller {
  #outputView;
  #inputHandler;

  constructor() {
    const outputView = new OutputView();
    this.#outputView = outputView;
    this.#inputHandler = new InputHandler(outputView);
  }

  async start() {
    const purchasePrice = await this.#inputHandler.getPurchasePrice();
    const lottoCount = purchasePrice / LOTTO_CONFIG.PRICE;
    this.#outputView.displayLottoCount(lottoCount);

    const lottos = Lotto.generateMultiple(lottoCount);
    this.#outputView.displayLottos(lottos);

    const winningLotto = await this.#inputHandler.getWinningLotto();
    const bonusNumber = await this.#inputHandler.getBonusNumber(winningLotto);

    const lottoResult = calculation.lottoResult(
      lottos,
      winningLotto,
      bonusNumber
    );
    this.#outputView.displayLottoResult(lottoResult, purchasePrice);

    const lottoRateOfReturn = calculation.lottoRateOfReturn(
      lottoResult,
      purchasePrice
    );
    this.#outputView.displayLottoRateOfReturn(lottoRateOfReturn);
  }
}

export default Controller;
