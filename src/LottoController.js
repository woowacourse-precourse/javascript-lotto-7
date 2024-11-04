import { lottoInputView } from "./lottoInputView.js";
import { lottoValidator } from "./validator.js";
import { lottoOutputView } from "./lottoOutputView.js";
export class LottoController {
  async play() {
    await this.inputPurchasePrice();
  }

  async inputPurchasePrice() {
    try {
      const input = await lottoInputView.readPrice();
      const price = Number(input);
      lottoValidator.validatePurchasePrice(price);

      const lottoQuantity = this.calculateLottoQuantity(price);
      this.generateLottoList(lottoQuantity);
    } catch (error) {
      lottoOutputView.showMessage(error.message);
      this.inputPurchasePrice(error);
    }
  }

  calculateLottoQuantity(price) {
    const PRICE_UNIT = 1000;

    return price / PRICE_UNIT;
  }

  generateLottoList() {}
}
