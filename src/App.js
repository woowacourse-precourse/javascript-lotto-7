import LottoIssuer from './Model/LottoIssuer.js';
import LottoResultCalculator from './Model/LottoResultCalculator.js';
import WinningLotto from './Model/WinningLotto.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  #inputView = new InputView();

  #outputView = new OutputView();

  async run() {
    const purchaseAmount = await this.#inputView.readLottoPurchaseAmount();
    const issuedLottos = this.issueLottos(purchaseAmount);
    this.printIssuedLottos(issuedLottos);

    const winningLotto = await this.readWinningLotto();

    this.printResults(issuedLottos, winningLotto);
  }

  issueLottos(purchaseAmount) {
    const lottoIssuer = new LottoIssuer(purchaseAmount);
    return lottoIssuer.issue();
  }

  printIssuedLottos(issuedLottos) {
    this.#outputView.printPurchasedLottosAmount(issuedLottos.length);
    issuedLottos.forEach((lotto) =>
      this.#outputView.printPurchasedLottoNumbers(lotto.getSortedNumbers()),
    );
  }

  async readWinningLotto() {
    const winningLotto = new WinningLotto();

    const winningNumbers = await this.#inputView.readWinningNumbers();
    winningLotto.setWinningNumbers(winningNumbers);

    const bonusNumber = await this.#inputView.readBonusNumber();
    winningLotto.setBonusNumber(bonusNumber);

    return winningLotto;
  }

  printResults(issuedLottos, winningLotto) {
    const resultCalculator = new LottoResultCalculator(
      issuedLottos,
      winningLotto,
    );

    const result = resultCalculator.calculateResults();
    this.#outputView.printLottoResult(result);

    const profitRate = resultCalculator.calculateProfitRate();
    this.#outputView.printLottoProfitRate(profitRate);
  }
}

export default App;
