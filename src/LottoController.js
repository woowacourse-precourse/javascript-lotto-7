import { lottoInputView } from "./lottoInputView.js";
import { lottoValidator } from "./validator.js";
import { lottoOutputView } from "./lottoOutputView.js";
import { LottoList } from "./LottoList.js";
import { WinningLotto } from "./WinningLotto.js";
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
      this.inputPurchasePrice();
    }
  }

  async inputWinningNumberList() {
    try {
      const input = await lottoInputView.readWinningNumberList();
      const winningNumberList = input.split(",").map(Number);

      lottoValidator.validateWinningNumberList(winningNumberList);
      lottoOutputView.showEmptyLine();

      this.inputBonusNumberList(winningNumberList);
    } catch (error) {
      lottoOutputView.showMessage(error.message);
      this.inputWinningNumberList();
    }
  }

  async inputBonusNumberList(winningNumberList) {
    try {
      const input = await lottoInputView.readBonusNumber();
      const bonusNumber = Number(input);

      lottoValidator.validateBonusNumber(winningNumberList, bonusNumber);

      this.generateWinningLotto(winningNumberList, bonusNumber);
      lottoOutputView.showEmptyLine();
    } catch (error) {
      lottoOutputView.showMessage(error.message);
      this.inputBonusNumberList(winningNumberList);
    }
  }

  calculateLottoQuantity(price) {
    const PRICE_UNIT = 1000;

    return price / PRICE_UNIT;
  }

  generateLottoList(quantity) {
    this.#lottoList = new LottoList(quantity);
  }

  generateWinningLotto(winningNumberList, bonusNumber) {
    this.#winningLotto = new WinningLotto(winningNumberList, bonusNumber);
  }

  printPurchasedLottoList() {
    lottoOutputView.showLottoQuantity(this.#lottoList.lottoList.length);
    lottoOutputView.showLottoListNumber(this.#lottoList.lottoList);
    lottoOutputView.showEmptyLine();
  }
}
