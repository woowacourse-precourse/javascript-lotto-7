import View from '../View/index.js';
import PurchaseDetails from '../Models/PurchaseDetails.js';
import WinningLotto from '../Models/WinningLotto.js';
import BonusNumber from '../Models/BonusNumber.js';

class LottoController {
  #lottoMachine;
  #lottoCalculator;
  #input;
  #output;

  constructor(
    lottoMachine,
    lottoCalculator,
    input = View.Input,
    output = View.Output,
  ) {
    this.#lottoMachine = lottoMachine;
    this.#lottoCalculator = lottoCalculator;
    this.#input = input;
    this.#output = output;
  }

  async #readPurchaseDetails() {
    const purchaseAmountInput = await this.#input.readPurchaseAmount();
    const purchaseDetail = new PurchaseDetails(purchaseAmountInput);
    return purchaseDetail.detail;
  }

  async #readWinningLotto() {
    const winningNumberInput = await this.#input.readWinningNumber();
    const winningLotto = new WinningLotto(winningNumberInput);
    return winningLotto.numbers;
  }

  async #readBonusNumber(winningNumbers) {
    const bonusNumberInput = await this.#input.readBonusNumber();
    const bonus = new BonusNumber(bonusNumberInput, winningNumbers);
    return bonus.number;
  }

  #printLottos(lottos) {
    this.#output.printLottos(lottos);
  }

  #printResult(winningStatistics, profitRate) {
    this.#output.printWinningStatistics(winningStatistics, profitRate);
  }

  #printErrorMessage(errorMessage) {
    this.#output.print(errorMessage);
  }

  async run() {
    try {
      const { purchaseAmount, purchaseCount } =
        await this.#readPurchaseDetails();
      const lottos = this.#lottoMachine.buyLottos(purchaseCount);

      this.#printLottos(lottos);

      const winningNumbers = await this.#readWinningLotto();
      const bonusNumber = await this.#readBonusNumber(winningNumbers);

      const { winningStatistics, profitRate } = this.#lottoCalculator.getResult(
        purchaseAmount,
        lottos,
        winningNumbers,
        bonusNumber,
      );

      this.#printResult(winningStatistics, profitRate);
    } catch (err) {
      this.#printErrorMessage(err.message);
    }
  }
}

export default LottoController;
