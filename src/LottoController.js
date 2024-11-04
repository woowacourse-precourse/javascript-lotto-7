import { lottoInputView } from "./lottoInputView.js";
import { lottoValidator } from "./validator.js";
import { lottoOutputView } from "./lottoOutputView.js";
import { LottoList } from "./LottoList.js";
export class LottoController {
  #lottoList;
  #winningLotto;

  async play() {
    await this.inputPurchasePrice();

    this.printPurchasedLottoList();

    await this.inputWinningNumberList();
  }

  async inputPurchasePrice() {
    try {
      const input = await lottoInputView.readPrice();
      const price = Number(input);
      lottoValidator.validatePurchasePrice(price);

      const lottoQuantity = this.calculateLottoQuantity(price);
      this.generateLottoList(lottoQuantity);
      lottoOutputView.showEmptyLine();
    } catch (error) {
      lottoOutputView.showMessage(error.message);
      this.inputPurchasePrice(error);
    }
  }

  async inputWinningNumberList() {
    try {
      const input = await lottoInputView.readWinningNumberList();
      const winningNumberList = input.split(",").map(Number);

      lottoValidator.validateWinningNumberList(winningNumberList);

      lottoOutputView.showEmptyLine();
    } catch (error) {
      lottoOutputView.showMessage(error.message);
      this.inputWinningNumberList(error);
    }
  }

  calculateLottoQuantity(price) {
    const PRICE_UNIT = 1000;

    return price / PRICE_UNIT;
  }

  generateLottoList(quantity) {
    this.#lottoList = new LottoList(quantity);
  }

  printPurchasedLottoList() {
    lottoOutputView.showLottoQuantity(this.#lottoList.lottoList.length);
    lottoOutputView.showLottoListNumber(this.#lottoList.lottoList);
    lottoOutputView.showEmptyLine();
  }
}
