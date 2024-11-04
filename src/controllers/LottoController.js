import LottoService from "../services/LottoService.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class LottoController {
  #lottoService;
  #inputView;
  #outputView;

  constructor() {
    this.#lottoService = new LottoService();
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async play() {
    try {
      const purchaseAmount = await this.#handlePurchaseAmount();
      const lottos = await this.#handleLottoPurchase(purchaseAmount);
      const { winningNumbers, bonusNumber } =
        await this.#handleWinningNumbers();
      await this.#handleResults(
        lottos,
        winningNumbers,
        bonusNumber,
        purchaseAmount
      );
    } catch (error) {
      this.#outputView.showError(error.message);
    }
  }

  async #handlePurchaseAmount() {
    const input = await this.#inputView.inputPurchaseAmount();
    return this.#lottoService.validatePurchaseAmount(input);
  }

  async #handleLottoPurchase(purchaseAmount) {
    const lottos = this.#lottoService.generateLottos(purchaseAmount);
    this.#outputView.showPurchaseCount(lottos.length);
    lottos.forEach((lotto) =>
      this.#outputView.showLottoNumbers(lotto.getNumbers())
    );
    return lottos;
  }

  async #handleWinningNumbers() {
    const winningInput = await this.#inputView.inputWinningNumbers();
    const winningNumbers =
      this.#lottoService.validateWinningNumbers(winningInput);

    const bonusInput = await this.#inputView.inputBonusNumber();
    const bonusNumber = this.#lottoService.validateBonusNumber(
      bonusInput,
      winningNumbers
    );

    return { winningNumbers, bonusNumber };
  }

  async #handleResults(lottos, winningNumbers, bonusNumber, purchaseAmount) {
    const { results, profitRate } = this.#lottoService.checkLottoResults(
      lottos,
      winningNumbers,
      bonusNumber,
      purchaseAmount
    );

    this.#outputView.showWinningStatisticsResult();
    this.#outputView.showWinningMessage(results);
    this.#outputView.showProfitRate(profitRate);
  }
}

export default LottoController;
