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
  #lottoMachine;
  #lottoCenter;
  #bank;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#lottoCenter = new LottoCenter();
    this.#bank = new Bank();
  }

  async run() {
    const purchaseAmount = await this.#tryInput(() =>
      this.#tryPurchaseAmount(),
    );
    const lottos = this.#buyLottos(purchaseAmount);

    Output.printLottos(lottos.map((lotto) => lotto.getLottoNumbers()));

    await this.#drawWinningNumbers();
    const rankCounts = await this.#checkWinningResult(lottos);

    this.#calculateTotalWinningPrize(rankCounts);
    const profitRate = this.#getProfitRate(purchaseAmount);

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

  #buyLottos(purchaseAmount) {
    this.#lottoMachine.buyLottos(purchaseAmount);
    const lottos = this.#lottoMachine
      .getLottos()
      .map((lotto) => new Lotto(lotto));

    return lottos;
  }

  async #drawWinningNumbers() {
    const winningNumbers = await this.#tryInput(() =>
      this.#tryWinningNumbers(),
    );
    const bonusNumber = await this.#tryInput(() =>
      this.#tryBonusNumber(winningNumbers),
    );

    this.#lottoCenter.setWinningNumbers(winningNumbers, bonusNumber);
  }

  #getRankCounts(ranks) {
    const rankCounts = Array(6).fill(0);

    ranks.forEach((rank) => {
      rankCounts[rank] += 1;
    });

    return rankCounts;
  }

  async #checkWinningResult(lottos, winningNumbers, bonusNumber) {
    const winningRanks = this.#lottoCenter.getWinningRanks(
      lottos.map((lotto) => lotto.getLottoNumbers()),
      winningNumbers,
      bonusNumber,
    );
    const rankCounts = this.#getRankCounts(winningRanks);

    return rankCounts;
  }

  #calculateTotalWinningPrize(rankCounts) {
    this.#bank.calculateTotalWinningPrize(rankCounts);
  }

  #getProfitRate(purchaseAmount) {
    this.#bank.calculateProfitRate(purchaseAmount);
    const profitRate = this.#bank.getProfitRate();

    return profitRate;
  }
}

export default App;
