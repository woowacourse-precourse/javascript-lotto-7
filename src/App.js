import LottoIssuer from './Model/LottoIssuer.js';
import LottoResultCalculator from './Model/LottoResultCalculator.js';
import WinningLotto from './Model/WinningLotto.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  #inputView = new InputView();

  #outputView = new OutputView();

  async run() {
    const issuedLottos = await this.issueLottos();
    this.printIssuedLottos(issuedLottos);

    const winningLotto = await this.createWinningLotto();

    const lottoResultCalculator = new LottoResultCalculator(
      issuedLottos,
      winningLotto,
    );

    this.printResults(lottoResultCalculator);
  }

  async issueLottos() {
    try {
      const purchaseAmount = await this.#inputView.readLottoPurchaseAmount();
      const lottoIssuer = new LottoIssuer(purchaseAmount);
      return lottoIssuer.issue();
    } catch (error) {
      this.#outputView.printError(error);
      return this.issueLottos();
    }
  }

  printIssuedLottos(issuedLottos) {
    this.#outputView.printPurchasedLottosAmount(issuedLottos.length);
    issuedLottos.forEach((lotto) =>
      this.#outputView.printPurchasedLottoNumbers(lotto.getSortedNumbers()),
    );
  }

  async createWinningLotto() {
    let winningLotto = new WinningLotto();

    winningLotto = await this.setWinningNumbers(winningLotto);
    winningLotto = await this.setBonusNumber(winningLotto);

    return winningLotto;
  }

  async setWinningNumbers(winningLotto) {
    try {
      const winningNumbers = await this.#inputView.readWinningNumbers();
      winningLotto.setWinningNumbers(winningNumbers);
      return winningLotto;
    } catch (error) {
      this.#outputView.printError(error);
      return this.setWinningNumbers(winningLotto);
    }
  }

  async setBonusNumber(winningLotto) {
    try {
      const bonusNumber = await this.#inputView.readBonusNumber();
      winningLotto.setBonusNumber(bonusNumber);
      return winningLotto;
    } catch (error) {
      this.#outputView.printError(error);
      return this.setBonusNumber(winningLotto);
    }
  }

  printResults(resultCalculator) {
    const result = resultCalculator.calculateResults();
    this.#outputView.printLottoResult(result);

    const profitRate = resultCalculator.calculateProfitRate();
    this.#outputView.printLottoProfitRate(profitRate);
  }
}

export default App;
