import Lotto from "./Lotto.js";
import WinningLotto from "./WinningLotto.js";
import Money from "./Money.js";
import RandomLotto from "../utils/RandomLotto.js";

class LottoGame {
  #lottos = [];
  #winningLotto;

  purchaseLottos(amount) {
    const money = new Money(amount);
    const count = money.calculateLottoCount();
    this.#generateLottos(count);
    return count;
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      this.#createAndStoreLotto();
    }
  }

  #createAndStoreLotto() {
    const numbers = RandomLotto.generateLottoNumbers();
    const lotto = new Lotto(numbers);
    this.#lottos.push(lotto);
  }

  getLottos() {
    return this.#lottos;
  }

  setWinningNumbers(numbers, bonusNumber) {
    this.#winningLotto = new WinningLotto(numbers, bonusNumber);
  }

  calculateResults() {
    const results = this.#initializeResults();
    this.#countMatchingResults(results);
    return results;
  }

  calculateProfitRate(results) {
    const totalPrize = WinningLotto.calculateTotalPrize(results);
    const purchaseAmount = this.#getTotalPurchaseAmount();
    return Money.calculateRate(totalPrize, purchaseAmount);
  }

  #initializeResults() {
    return WinningLotto.createInitialResults();
  }

  #countMatchingResults(results) {
    this.#lottos.forEach((lotto) => {
      this.#winningLotto.processResult(results, lotto);
    });
  }

  #getTotalPurchaseAmount() {
    return Money.calculateTotalAmount(this.#lottos.length);
  }
}

export default LottoGame;