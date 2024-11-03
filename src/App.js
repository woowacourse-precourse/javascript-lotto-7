import InputUtils from "./Utils/inputUtils.js";
import OutputUtils from "./Utils/OutputUtils.js";
import { InputValidator } from "./Utils/Validator.js";

class App {
  async run() {

    while(true) {
      try {
        const purchaseAmount = await InputUtils.inputPurchaseAmount();
        InputValidator.purchaseAmountValidator(purchaseAmount);

        const numberOfPurchase = await InputUtils.getNumberOfPurchase(purchaseAmount);
        OutputUtils.printNumberOfPurchase(numberOfPurchase);
        break;

      } catch (error) {
        OutputUtils.printErrorMessage(error.message);
      }
    }


  }
}

export default App;
