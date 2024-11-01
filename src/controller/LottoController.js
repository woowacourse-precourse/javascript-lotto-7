import { InputView } from "../view/InputView.js";
import LottoService from "../services/LottoService.js";
import OutputView from "../view/OutputView.js";
import validateWinningNumbers from "../validator/validateWinningNumbers.js";
import validateBonusNumber from "../validator/validateBonusNumber.js";
import AmountValidator from "../validator/AmountValidator.js";

class LottoController {
  #lottoService;

  constructor() {
    this.#lottoService = new LottoService();
  }

  async run() {
    const amount = await this.getValidAmount();
    const lottoCount = amount / 1000;

    this.generateLottos(lottoCount);
    this.displayLottoResults(lottoCount);

    const winningNumbers = await this.getValidWinningNumbers();
    const bonusNumber = await this.getValidBonusNumber(winningNumbers);

    this.displayWinningStatistics(winningNumbers, bonusNumber, amount);
  }

  async getValidAmount() {
    const amountInput = await InputView.getLottoAmount();
    return AmountValidator.validate(amountInput);
  }

  async getValidWinningNumbers() {
    const winningNumbersInput = await InputView.getWinningNumbers();
    return validateWinningNumbers(winningNumbersInput);
  }

  async getValidBonusNumber(winningNumbers) {
    const bonusNumberInput = await InputView.getBonusNumber();
    return validateBonusNumber(bonusNumberInput, winningNumbers);
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
