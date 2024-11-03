import { INPUT, OUTPUT } from "./constants/message.js";
import { getInput } from "./io/Input.js";
import { getOutput } from "./io/Output.js";
import Price from "./domain/Price.js";

class App {
  async run() {
    try {
      const purchasePriceInput = await getInput(INPUT.PURCHASE_PRICE);
      const purchase = new Price(purchasePriceInput);

      getOutput(`\n${purchase.count}` + OUTPUT.PURCHASE);
    } catch (error) {
      console.log("err", error);
    }
  }
}

export default App;
