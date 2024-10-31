import { OutputView } from "./views/OutputView.js";
import { InputView } from "./views/InputView.js";
import { Validator } from "./utils/Validator.js";
import User from "./User.js";
import LottoController from "./controllers/LottoController.js";
import { LOTTO } from "./constants/Constants.js";
import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";

class App {
  #totalIssuance;

  async run() {
    const purchaseAmount = await this.inputPurchaseAmount();
    this.#totalIssuance = purchaseAmount / LOTTO.PRICE;

    this.outputPurchaseResult(this.#totalIssuance);

    const user = new User(purchaseAmount);

    for (let i = 0; i < this.#totalIssuance; i++) {
      const lottoNumber = await this.issuance();
      user.getLotto(lottoNumber);
      OutputView.lottoNumber(lottoNumber);
    }

    const lottoController = new LottoController(user);
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

  outputPurchaseResult() {
    OutputView.purchaseResult(this.#totalIssuance);
  }

  async issuance() {
    return await RandomNumberGenerator();
  }
}

export default App;
