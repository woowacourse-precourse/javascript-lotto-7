import { LOTTO_PRIZE } from '../constants/lottoResults.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../models/Lotto.js';
import InputHandler from '../handler/inputHandler.js';

class Controller {
  #outputView;
  #inputHandler;

  constructor() {
    this.#outputView = new OutputView();
    this.#inputHandler = new InputHandler(this.#outputView);
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

    const lottoResult = this.calculateLottoResult(
      lottos,
      winningLotto,
      bonusNumber
    );
    this.#outputView.displayLottoResult(lottoResult, purchasePrice);

    const winningRateOfReturn = this.calculateLottoRateOfReturn(
      lottoResult,
      purchasePrice
    );
    this.#outputView.displayLottoRateOfReturn(winningRateOfReturn);
  }

  calculateLottoResult(lottos, winningLotto, bonusNumber) {
    const lottoResult = { ...LOTTO_PRIZE };

    lottos.forEach((lotto) => {
      const rank = lotto.calculateRank(winningLotto, bonusNumber);
      if (rank) lottoResult[rank].count += 1;
    });

    return lottoResult;
  }

  calculateLottoRateOfReturn(lottoResult, purchasePrice) {
    const winningAmount = Object.values(lottoResult).reduce(
      (sum, { amount, count }) => sum + amount * count,
      0
    );

    return ((winningAmount / purchasePrice) * 100).toFixed(1);
  }
}

export default Controller;
