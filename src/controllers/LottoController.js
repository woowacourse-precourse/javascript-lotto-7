import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import LottoValidator from "../utils/LottoValidator.js";
import LottoService from "../services/LottoService.js";

class LottoController {
  constructor() {
    this.lottoService = new LottoService();
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lottos = [];
  }

  async start() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const validAmount = parseInt(purchaseAmount, 10);

      if (LottoValidator.validatePurchaseAmount(validAmount)) {
        const lottoCount = validAmount / 1000;
        OutputView.printLottoCount(lottoCount);
        this.generateAndPrintLottos(lottoCount);
        await this.getWinningAndBonusNumbers();
        this.calculateAndPrintResults(purchaseAmount);
      }
    } catch (error) {
      OutputView.printErrorMessage(error.message);
    }
  }

  generateAndPrintLottos(count) {
    this.lottos = Array.from({ length: count }, () =>
      this.lottoService.generateLotto()
    );
    this.lottos.forEach((lotto) =>
      OutputView.printLottoNumbers(lotto.getNumbers())
    );
  }

  async getWinningAndBonusNumbers() {
    const winningNumbersInput = await InputView.readWinningNumbers();
    const winningNumbers = winningNumbersInput.split(",").map(Number);

    if (!LottoValidator.validateWinningNumbers(winningNumbers)) {
      return;
    }

    const bonusNumberInput = await InputView.readBonusNumber();
    const bonusNumber = Number(bonusNumberInput);

    if (!LottoValidator.validateBonusNumber(bonusNumber, winningNumbers)) {
      return;
    }

    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  calculateAndPrintResults(purchaseAmount) {
    const results = this.lottoService.calculateResults(
      this.lottos,
      this.winningNumbers,
      this.bonusNumber
    );

    const totalPrize = this.lottoService.calculateTotalPrize(results);
    const profitRate = (totalPrize / purchaseAmount) * 100;

    OutputView.printResultHeader();
    OutputView.printResults(results);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoController;
