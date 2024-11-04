import { LottoGenerator, WinningNumberMatcher } from './features/index.js';
import { InputView } from './view/InputView.js';
import { printResult } from './view/OutputView.js';
class App {
  #inputView;
  #lottos;

  constructor() {
    this.#inputView = new InputView();
    this.#lottos = [];
  }

  async run() {
    const purchaseAmount = await this.#inputView.getPurchaseAmount();
    const lottoAmount = this.#inputView.printPurchaseAmount(purchaseAmount);
    this.#lottos = LottoGenerator(lottoAmount);

    const [winningNumbers, bonusNumber] = await this.#inputView.getWinningNumberAndBonusNumber();

    const matchResults = WinningNumberMatcher(this.#lottos, winningNumbers, bonusNumber);
    matchResults.totalPurchase = lottoAmount;

    printResult(matchResults);
  }
}

export default App;
