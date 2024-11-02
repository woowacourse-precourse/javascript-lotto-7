import LottoService from "../services/LottoService.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import AmountValidator from "../validator/AmountValidator.js";
import WinningNumbersValidator from "../validator/WinningNumbersValidator.js";
import BonusNumberValidator from "../validator/BonusNumberValidator.js";
import LOTTO from "../constants/lotto.js";
import { printResult } from "../utils/util.js";

class LottoController {
  #lottoService;

  constructor() {
    this.#lottoService = new LottoService();
  }

  async run() {
    try {
      const amount = await this.getValidAmount();
      const lottoCount = amount / LOTTO.AMOUNT_UNIT;

      this.generateLottos(lottoCount);
      this.displayLottoResults(lottoCount);

      const winningNumbers = await this.getValidWinningNumbers();
      const bonusNumber = await this.getValidBonusNumber(winningNumbers);

      this.displayWinningStatistics(winningNumbers, bonusNumber, amount);
    } catch (error) {
      printResult(error.message);
    }
  }

  async getValidAmount() {
    const amountInput = await InputView.getLottoAmount();
    return AmountValidator.validate(amountInput);
  }

  async getValidWinningNumbers() {
    const winningNumbersInput = await InputView.getWinningNumbers();
    return WinningNumbersValidator.validate(winningNumbersInput);
  }

  async getValidBonusNumber(winningNumbers) {
    const bonusNumberInput = await InputView.getBonusNumber();
    return BonusNumberValidator.validate(bonusNumberInput, winningNumbers);
  }

  generateLottos(lottoCount) {
    this.#lottoService.generateLottos(lottoCount);
  }

  displayLottoResults(lottoCount) {
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottoNumbers(this.#lottoService.getLottos());
  }

  displayWinningStatistics(winningNumbers, bonusNumber, amount) {
    const matchCounts = this.#lottoService.compareLottos(
      winningNumbers,
      bonusNumber
    );
    OutputView.printWinningStatistics(matchCounts);
    const profit = this.#lottoService.calculateProfit(matchCounts, amount);
    OutputView.printProfit(profit);
  }
}

export default LottoController;
