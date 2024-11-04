import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import LottoValidator from "../utils/LottoValidator.js";
import LottoService from "../services/LottoService.js";

class LottoController {
  constructor() {
    this.lottoService = new LottoService();
  }

  async start() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const validAmount = parseInt(purchaseAmount, 10);

      if (LottoValidator.validatePurchaseAmount(validAmount)) {
        const lottoCount = validAmount / 1000;
        OutputView.printLottoCount(lottoCount);
        this.generateAndPrintLottos(lottoCount);
      }
    } catch (error) {
      OutputView.printErrorMessage(error.message);
    }
  }

  generateAndPrintLottos(count) {
    for (let i = 0; i < count; i++) {
      const lotto = this.lottoService.generateLotto();
      // console.log(lotto.getNumbers());
      OutputView.printLottoNumbers(lotto.getNumbers());
    }
  }
}

export default LottoController;
