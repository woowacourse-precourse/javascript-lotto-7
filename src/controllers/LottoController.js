import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import LottoValidator from "../utils/LottoValidator.js";

class LottoController {
  async start() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const validAmount = parseInt(purchaseAmount, 10);

      if (LottoValidator.validatePurchaseAmount(validAmount)) {
        const lottoCount = validAmount / 1000;
        OutputView.printLottoCount(lottoCount);
      }
    } catch (error) {
      OutputView.printErrorMessage(error.message);
    }
  }
}

export default LottoController;
