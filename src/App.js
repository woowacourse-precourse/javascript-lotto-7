import { MSG_PURCHASE_FEE } from "./constants.js";
import { getInput } from "./handlers/IOhandler.js";
import getFee from "./processors/feeProcessor.js";

class App {
  async run() {
    try {
      const feeInput = await getInput(MSG_PURCHASE_FEE);
      const fee = getFee(feeInput);
      const amount = fee / 1000;
    } catch (err) {
      throw err;
    }
  }
}

export default App;
