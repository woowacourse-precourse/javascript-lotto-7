import Input from './Input.js';
import Output from './Output.js';
import LottoMachine from './LottoMachine.js';
import Lotto from './Lotto.js';
import LottoCenter from './LottoCenter.js';
import Bank from './Bank.js';
import LOTTO_RULE from './constant/lotto.js';
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
      this.#getPurchaseAmount(),
    );
    const lottos = this.#buyLottos(purchaseAmount);

    Output.printLottos(lottos.map((lotto) => lotto.getLottoNumbers()));

    await this.#drawWinningNumbers();
    const winningRanks = await this.#getWinningRanks(lottos);
    const rankCounts = this.#getRankCounts(winningRanks);

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

  async #getPurchaseAmount() {
    const purchaseAmount = await Input.getPurchaseAmountInput();
    validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  async #getWinningNumbers() {
    const winningNumbers = await Input.getWinningNumbersInput();
    validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async #getBonusNumber(winningNumbers) {
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
      this.#getWinningNumbers(),
    );
    const bonusNumber = await this.#tryInput(() =>
      this.#getBonusNumber(winningNumbers),
    );

    this.#lottoCenter.setWinningNumbers(winningNumbers, bonusNumber);
  }

  #getRankCounts(ranks) {
    const rankCounts = Array(LOTTO_RULE.RANK_COUNT_LENGTH).fill(0);

    ranks.forEach((rank) => {
      if (rank === LOTTO_RULE.RANK.NONE) return;
      rankCounts[rank - 1] += 1;
    });

    return rankCounts;
  }

  #getWinningRanks(lottos) {
    const winningRanks = this.#lottoCenter.getWinningRanks(
      lottos.map((lotto) => lotto.getLottoNumbers()),
    );

    return winningRanks;
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
