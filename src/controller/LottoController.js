import LottoView from "../view/LottoView.js";
import { validatePurchasingAmount } from "../validation.js";
class LottoController {
  constructor() {
    this.view = new LottoView();
  }

  async init() {
    await this.getLottoAmounts();
  }

  async setLottoAmounts() {
    try {
      await this.getLottoAmounts();
    } catch (error) {
      throw error;
    }
  }

  async getLottoAmounts() {
    const userInputAmounts = await this.view.inputLottoAmount();
    this.checkLottoAmounts(userInputAmounts);
  }

  checkLottoAmounts(userInputAmounts) {
    validatePurchasingAmount(userInputAmounts);
  }
}

export default LottoController;
