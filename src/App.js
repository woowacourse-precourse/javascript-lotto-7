import Input from "./utils/Input.js";
import Validator from "./utils/Validator.js";
import LottoGenerator from "./utils/LottoGenerator.js";
import Output from "./utils/Output.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    const lottoTickets = LottoGenerator.generateTickets(lottoCount);
  }

  async getPurchaseAmount() {
    let purchaseAmount;

    while (true) {
      purchaseAmount = await Input.purchaseAmount();

      const isValidPrice =
        Validator.isNumber(purchaseAmount) &&
        Validator.isAboveMinimum(purchaseAmount) &&
        Validator.isThousandUnit(purchaseAmount);

      if (isValidPrice) {
        break;
      }
    }

    return purchaseAmount;
  }
}

export default App;
