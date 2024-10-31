import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import lottoCalculator from '../utils/lottoCalculator.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../models/Lotto.js';
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
    const purchasePrice =
      await this.#inputHandler.parseValidatePurchasePriceInput();

    const lottoCount = purchasePrice / LOTTO_CONFIG.PRICE;
    this.#outputView.displayLottoCount(lottoCount);

    const lottos = Lotto.generateMultiple(lottoCount);
    this.#outputView.displayLottos(lottos);

    const winningLotto =
      await this.#inputHandler.parseValidateWinningLottoInput();

    const bonusNumber = await this.#inputHandler.parseValidateBonusNumberInput(
      winningLotto
    );

    const lottoResult = lottoCalculator.result(
      lottos,
      winningLotto,
      bonusNumber
    );
    this.#outputView.displayLottoResult(lottoResult, purchasePrice);

    const winningRateOfReturn = lottoCalculator.rateOfReturn(
      lottoResult,
      purchasePrice
    );
    this.#outputView.displayLottoRateOfReturn(winningRateOfReturn);
  }
}

export default Controller;
