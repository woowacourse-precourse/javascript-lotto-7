import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import LottoValidator from "../utils/LottoValidator.js";
import LottoService from "../services/LottoService.js";
import { ERROR_MESSAGE } from "../utils/constants.js";
import outputView from "../views/outputView.js";

class LottoController {
  constructor() {
    this.lottoService = new LottoService();
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  async start() {
    try {
      const purchaseAmount = await this.requestPurchaseAmount();
      const lottoCount = purchaseAmount / 1000;

      OutputView.printLottoCount(lottoCount);
      this.createLottos(lottoCount);

      await this.setWinningNumbers();
      this.showResults(purchaseAmount);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
    }
  }

  async requestPurchaseAmount() {
    const amount = await InputView.readPurchaseAmount();
    const validatedAmount = parseInt(amount, 10);
    return validatedAmount;
  }

  createLottos(count) {
    this.lottos = Array.from({ length: count }, () =>
      this.lottoService.generateLotto()
    );
    this.lottos.forEach((lotto) =>
      OutputView.printLottoNumbers(lotto.getNumbers())
    );
  }

  async setWinningNumbers() {
    this.winningNumbers = await this.inputWinningNumbers();
    this.bonusNumber = await this.inputBonusNumber();
  }

  async inputWinningNumbers() {
    const numbers = (await InputView.readWinningNumbers())
      .split(",")
      .map(Number);

    if (!LottoValidator.validateWinningNumbers(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }
    return numbers;
  }

  async inputBonusNumber() {
    const bonus = Number(await InputView.readBonusNumber());

    if (!LottoValidator.validateBonusNumber(bonus, this.winningNumbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
    }
    return bonus;
  }

  showResults(purchaseAmount) {
    const results = this.lottoService.calculateResults(
      this.lottos,
      this.winningNumbers,
      this.bonusNumber
    );
    const totalPrize = this.lottoService.calculateTotalPrize(results);
    const profitRate = this.calculateProfitRate(totalPrize, purchaseAmount);

    OutputView.printResultHeader();
    OutputView.printResults(results);
    OutputView.printProfitRate(profitRate);
  }

  calculateProfitRate(totalPrize, purchaseAmount) {
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoController;
