import LottoGame from "../domain/LottoGame.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class LottoController {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    try {
      await this.#purchaseLottos();
      await this.#setWinningNumbers();
      this.#showResults();
    } catch (error) {
      OutputView.printError(error);
    }
  }

  async #purchaseLottos() {
    const amount = await InputView.readPurchaseAmount();
    const count = this.#lottoGame.purchaseLottos(amount);

    OutputView.printPurchaseCount(count);
    this.#printLottoNumbers();
  }

  #printLottoNumbers() {
    this.#lottoGame.getLottos().forEach(this.#printLottoNumber);
  }

  #printLottoNumber(lotto) {
    OutputView.printLottoNumbers(lotto.getNumbers());
  }

  async #setWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber(winningNumbers);
    this.#lottoGame.setWinningNumbers(winningNumbers, bonusNumber);
  }

  #showResults() {
    const results = this.#lottoGame.calculateResults();
    OutputView.printStatistics(results);

    const profitRate = this.#lottoGame.calculateProfitRate(results);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoController;
