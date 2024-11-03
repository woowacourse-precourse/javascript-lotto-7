import Input from './Input.js';
import Output from './Output.js';
import LottoMachine from './LottoMachine.js';
import Lotto from './Lotto.js';
import LottoCenter from './LottoCenter.js';
import Bank from './Bank.js';
import {
  validatePurchaseAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from './util/validator.js';

class App {
  async run() {
    const { lottos, purchaseAmount } = await this.#buyLottos();

    Output.printLottos(lottos.map((lotto) => lotto.getLottoNumbers()));

    const rankCounts = await this.#checkWinningResult(lottos);
    const totalWinningPrize = this.#checkTotalWinningPrize(rankCounts);
    const profitRate = this.#calculateProfitRate(
      totalWinningPrize,
      purchaseAmount,
    );

    Output.printWinningResult(rankCounts, profitRate);
  }

  async #tryInput(inputFunction) {
    try {
      const input = await inputFunction();
      return input;
    } catch (error) {
      Output.printErrorMessage(error.message);
      return await this.#tryInput(inputFunction);
    }
  }

  async #tryPurchaseAmount() {
    const purchaseAmount = await Input.getPurchaseAmountInput();
    validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  async #tryWinningNumbers() {
    const winningNumbers = await Input.getWinningNumbersInput();
    validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async #tryBonusNumber(winningNumbers) {
    const bonusNumber = await Input.getBonusNumberInput();
    validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  async #buyLottos() {
    const purchaseAmount = await this.#tryInput(
      this.#tryPurchaseAmount.bind(this),
    );
    const lottoMachine = new LottoMachine(Number(purchaseAmount));
    const lottos = lottoMachine.getLottos().map((lotto) => new Lotto(lotto));

    return { lottos, purchaseAmount };
  }

  #getRankCounts(ranks) {
    const rankCounts = Array(6).fill(0);

    ranks.forEach((rank) => {
      rankCounts[rank] += 1;
    });

    return rankCounts;
  }

  async #checkWinningResult(lottos) {
    const winningNumbers = await this.#tryInput(
      this.#tryWinningNumbers.bind(this),
    );
    const bonusNumber = await this.#tryInput(() =>
      this.#tryBonusNumber(winningNumbers),
    );

    const lottoCenter = new LottoCenter(winningNumbers, bonusNumber);
    const winningRanks = lottoCenter.getWinningRanks(
      lottos.map((lotto) => lotto.getLottoNumbers()),
    );
    const rankCounts = this.#getRankCounts(winningRanks);

    return rankCounts;
  }

  #checkTotalWinningPrize(rankCounts) {
    const bank = new Bank(rankCounts);
    const totalWinningPrize = bank.getTotalWinningPrize();

    return totalWinningPrize;
  }

  #calculateProfitRate(totalWinningPrize, purchaseAmount) {
    return (totalWinningPrize / purchaseAmount) * 100;
  }
}

export default App;
