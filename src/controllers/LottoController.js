import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import LottoValidator from "../utils/LottoValidator.js";
import LottoService from "../services/LottoService.js";
import { LOTTO_PRICE } from "../utils/constants.js";

class LottoController {
  constructor() {
    this.lottoService = new LottoService();
  }

  async start() {
    try {
      await this.validateAndProcessPurchaseAmount();
      await this.getWinningAndBonusNumbers();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
    }
  }

  async validateAndProcessPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    const validAmount = parseInt(purchaseAmount, 10);

    if (LottoValidator.validatePurchaseAmount(validAmount)) {
      const lottoCount = validAmount / LOTTO_PRICE;
      OutputView.printLottoCount(lottoCount);
      this.generateAndPrintLottos(lottoCount);
    }
  }

  generateAndPrintLottos(count) {
    for (let i = 0; i < count; i++) {
      const lotto = this.lottoService.generateLotto();
      OutputView.printLottoNumbers(lotto.getNumbers());
    }
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
}

export default LottoController;
