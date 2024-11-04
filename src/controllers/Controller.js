import calculationLotto from '../helpers/calculationLotto.js';
import Lotto from '../models/Lotto.js';

class Controller {
  #outputView;
  #inputHandler;

  constructor(outputView, inputHandler) {
    this.#outputView = outputView;
    this.#inputHandler = inputHandler;
  }

  async start() {
    const purchasePrice = await this.#inputHandler.getPurchasePrice();
    const lottoCount = calculationLotto.count(purchasePrice);
    this.#outputView.displayLottoCount(lottoCount);

    const lottos = Lotto.generateMultiple(lottoCount);
    this.#outputView.displayLottos(lottos);

    const winningLotto = await this.#inputHandler.getWinningLotto();
    const bonusNumber = await this.#inputHandler.getBonusNumber(winningLotto);
    const lottoResult = calculationLotto.result(
      lottos,
      winningLotto,
      bonusNumber
    );
    this.#outputView.displayLottoResult(lottoResult);

    const lottoRateOfReturn = calculationLotto.rateOfReturn(
      lottoResult,
      purchasePrice
    );
    this.#outputView.displayLottoRateOfReturn(lottoRateOfReturn);
  }
}

export default Controller;
