import Input from "./utils/Input.js";
import Validator from "./utils/Validator.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
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
