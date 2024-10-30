import { OutputView } from "./views/OutputView.js";
import { InputView } from "./views/InputView.js";
import { Validator } from "./utils/Validator.js";
import User from "./User.js";
import LottoController from "./controllers/LottoController.js";

class App {
  async run() {
    const lottoController = new LottoController(
      new User(await this.inputPurchaseAmount())
    );
    await lottoController.start();
  }

  async inputPurchaseAmount() {
    const purchaseAmount = Number(await InputView.purchaseAmount());
    await this.validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }

  async validatePurchaseAmount(number) {
    try {
      Validator.purchaseAmountunit(number);
      Validator.minPurchase(number);
    } catch (error) {
      OutputView.error(error.message);
      await this.inputPurchaseAmount();
    }
  }
}

export default App;
