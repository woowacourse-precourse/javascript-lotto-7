import { INPUT } from "./constants/lotto";
import { getInput } from "./io/Input";

class App {
  async run() {
    try {
      const purchasePrice = await getInput(INPUT.PURCHASE_PRICE);
    } catch (error) {}
  }
}

export default App;
